// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./interfaces/IERC20.sol";
import "./libraries/SafeERC20.sol";

import "./XWARPToken.sol";
import "./SXWARPBar.sol";

// import "@nomiclabs/buidler/console.sol";
// MasterChef is the master of XWARP. He can make XWARP and he is a fair guy.
//
// Note that it's ownable and the owner wields tremendous power. The ownership
// will be transferred to a governance smart contract once XWARP is sufficiently
// distributed and the community can show to govern itself.
//
// Have fun reading it. Hopefully it's bug-free. God bless.
contract MasterChef is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        //
        // We do some fancy math here. Basically, any point in time, the amount of XWARPs
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accXWARPPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accXWARPPerShare` (and `lastRewardBlock`) gets updated.
        //   2. User receives the pending reward sent to his/her address.
        //   3. User's `amount` gets updated.
        //   4. User's `rewardDebt` gets updated.
    }

    // Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. XWARPs to distribute per block.
        uint256 lastRewardBlock; // Last block number that XWARPs distribution occurs.
        uint256 accXWARPPerShare; // Accumulated XWARPs per share, times 1e12. See below.
    }

    // The XWARP TOKEN!
    XWARPToken public XWARP;
    // The SXWARP TOKEN!
    SXWARPBar public SXWARP;
    // Dev address.
    address public devaddr;
    address public treasury;
    // XWARP tokens created per block.
    uint256 public XWARPPerBlock;
    // Bonus muliplier for early XWARP makers.
    uint256 public BONUS_MULTIPLIER = 1;
    uint256 public constant MAX_FEE = 500; // 5%
    uint256 public Fee = 200; // 2%
    uint256 public constant MAX_RewardFEE = 500; // 5%
    uint256 public RewardFee = 200; // 2%

    // Info of each pool.
    PoolInfo[] public poolInfo;
    // Info of each user that stakes LP tokens.
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    // Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint = 0;
    // The block number when XWARP mining starts.
    uint256 public startBlock;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount);

    constructor(
        XWARPToken _XWARP,
        SXWARPBar _SXWARP,
        address _devaddr,
        uint256 _XWARPPerBlock,
        uint256 _startBlock,
        address _treasury
    ) public {
        XWARP = _XWARP;
        SXWARP = _SXWARP;
        devaddr = _devaddr;
        XWARPPerBlock = _XWARPPerBlock;
        startBlock = _startBlock;
        treasury = _treasury;

        // staking pool
        poolInfo.push(PoolInfo({lpToken: _XWARP, allocPoint: 1000, lastRewardBlock: startBlock, accXWARPPerShare: 0}));

        totalAllocPoint = 1000;
    }

    function updateMultiplier(uint256 multiplierNumber) public onlyOwner {
        BONUS_MULTIPLIER = multiplierNumber;
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }


    function setFee(uint256 _Fee) public onlyOwner {
        require(_Fee <= MAX_FEE, "Fee cannot be more than MAX_FEE");
        Fee = _Fee;
    }

    
    function setRewardFee(uint256 _RewardFee) public onlyOwner {
        require(_RewardFee <= MAX_RewardFEE, "RewardFee cannot be more than MAX_RewardFEE");
        RewardFee = _RewardFee;
    }


    // Add a new lp to the pool. Can only be called by the owner.
    // XXX DO NOT add the same LP token more than once. Rewards will be messed up if you do.
    function add(
        uint256 _allocPoint,
        IERC20 _lpToken,
        bool _withUpdate
    ) public onlyOwner {
        if (_withUpdate) {
            massUpdatePools();
        }
        uint256 lastRewardBlock = block.number > startBlock ? block.number : startBlock;
        totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolInfo.push(
            PoolInfo({lpToken: _lpToken, allocPoint: _allocPoint, lastRewardBlock: lastRewardBlock, accXWARPPerShare: 0})
        );
        updateStakingPool();
    }

    // Update the given pool's XWARP allocation point. Can only be called by the owner.
    function set(
        uint256 _pid,
        uint256 _allocPoint,
        bool _withUpdate
    ) public onlyOwner {
        if (_withUpdate) {
            massUpdatePools();
        }
        uint256 prevAllocPoint = poolInfo[_pid].allocPoint;
        poolInfo[_pid].allocPoint = _allocPoint;
        if (prevAllocPoint != _allocPoint) {
            totalAllocPoint = totalAllocPoint.sub(prevAllocPoint).add(_allocPoint);
            updateStakingPool();
        }
    }

    function updateStakingPool() internal {
        uint256 length = poolInfo.length;
        uint256 points = 0;
        for (uint256 pid = 1; pid < length; ++pid) {
            points = points.add(poolInfo[pid].allocPoint);
        }
        if (points != 0) {
            points = points.div(3);
            totalAllocPoint = totalAllocPoint.sub(poolInfo[0].allocPoint).add(points);
            poolInfo[0].allocPoint = points;
        }
    }

    // Return reward multiplier over the given _from to _to block.
    function getMultiplier(uint256 _from, uint256 _to) public view returns (uint256) {
        return _to.sub(_from).mul(BONUS_MULTIPLIER);
    }

    // View function to see pending XWARPs on frontend.
    function pendingXWARP(uint256 _pid, address _user) external view returns (uint256) {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accXWARPPerShare = pool.accXWARPPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
            uint256 XWARPReward = multiplier.mul(XWARPPerBlock).mul(pool.allocPoint).div(totalAllocPoint);
            accXWARPPerShare = accXWARPPerShare.add(XWARPReward.mul(1e12).div(lpSupply));
        }
        return user.amount.mul(accXWARPPerShare).div(1e12).sub(user.rewardDebt);
    }

    // Update reward variables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        if (block.number <= pool.lastRewardBlock) {
            return;
        }
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply == 0) {
            pool.lastRewardBlock = block.number;
            return;
        }
        uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
        uint256 XWARPReward = multiplier.mul(XWARPPerBlock).mul(pool.allocPoint).div(totalAllocPoint);
        XWARP.mint(devaddr, XWARPReward.div(10));
        XWARP.mint(address(SXWARP), XWARPReward);
        pool.accXWARPPerShare = pool.accXWARPPerShare.add(XWARPReward.mul(1e12).div(lpSupply));
        pool.lastRewardBlock = block.number;
    }

    // Deposit LP tokens to MasterChef for XWARP allocation.
    function deposit(uint256 _pid, uint256 _amount) public {
        require(_pid != 0, "deposit XWARP by staking");

        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        updatePool(_pid);
        if (user.amount > 0) {
            uint256 pending = user.amount.mul(pool.accXWARPPerShare).div(1e12).sub(user.rewardDebt);
            uint256 currentRewardFee = pending.mul(RewardFee).div(10000);
            if (pending > 0) {
                safeXWARPTransfer(msg.sender, pending.sub(currentRewardFee));
                safeXWARPTransfer(treasury, currentRewardFee);
            }
        }
        if (_amount > 0) {
            pool.lpToken.safeTransferFrom(address(msg.sender), address(this), _amount);
            user.amount = user.amount.add(_amount);
        }
        user.rewardDebt = user.amount.mul(pool.accXWARPPerShare).div(1e12);
        emit Deposit(msg.sender, _pid, _amount);
    }

    // Withdraw LP tokens from MasterChef.
    function withdraw(uint256 _pid, uint256 _amount) public {
        require(_pid != 0, "withdraw XWARP by unstaking");
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");

        updatePool(_pid);
        uint256 pending = user.amount.mul(pool.accXWARPPerShare).div(1e12).sub(user.rewardDebt);
        uint256 currentRewardFee = pending.mul(RewardFee).div(10000);
        if (pending > 0) {
            safeXWARPTransfer(msg.sender, pending.sub(currentRewardFee));
            safeXWARPTransfer(treasury, currentRewardFee);
        }
        if (_amount > 0) {
            user.amount = user.amount.sub(_amount);
            uint256 currentFee = _amount.mul(Fee).div(10000);
            pool.lpToken.safeTransfer(address(msg.sender), _amount.sub(currentFee));
            pool.lpToken.safeTransfer(treasury, currentFee);
            
        }
        user.rewardDebt = user.amount.mul(pool.accXWARPPerShare).div(1e12);
        emit Withdraw(msg.sender, _pid, _amount);
    }

    // Stake XWARP tokens to MasterChef
    function enterStaking(uint256 _amount) public {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[0][msg.sender];
        updatePool(0);
        if (user.amount > 0) {
            uint256 pending = user.amount.mul(pool.accXWARPPerShare).div(1e12).sub(user.rewardDebt);
            if (pending > 0) {
                safeXWARPTransfer(msg.sender, pending);
            }
        }
        if (_amount > 0) {
            pool.lpToken.safeTransferFrom(address(msg.sender), address(this), _amount);
            user.amount = user.amount.add(_amount);
        }
        user.rewardDebt = user.amount.mul(pool.accXWARPPerShare).div(1e12);

        SXWARP.mint(msg.sender, _amount);
        emit Deposit(msg.sender, 0, _amount);
    }

    // Withdraw XWARP tokens from STAKING.
    function leaveStaking(uint256 _amount) public {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[0][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");
        updatePool(0);
        uint256 pending = user.amount.mul(pool.accXWARPPerShare).div(1e12).sub(user.rewardDebt);
        if (pending > 0) {
            safeXWARPTransfer(msg.sender, pending);
        }
        if (_amount > 0) {
            user.amount = user.amount.sub(_amount);
            pool.lpToken.safeTransfer(address(msg.sender), _amount);
        }
        user.rewardDebt = user.amount.mul(pool.accXWARPPerShare).div(1e12);

        SXWARP.burn(msg.sender, _amount);
        emit Withdraw(msg.sender, 0, _amount);
    }

    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        pool.lpToken.safeTransfer(address(msg.sender), user.amount);
        emit EmergencyWithdraw(msg.sender, _pid, user.amount);
        user.amount = 0;
        user.rewardDebt = 0;
    }

    // Safe XWARP transfer function, just in case if rounding error causes pool to not have enough XWARPs.
    function safeXWARPTransfer(address _to, uint256 _amount) internal {
        SXWARP.safeXWARPTransfer(_to, _amount);
    }

    // Update dev address by the previous dev.
    function dev(address _devaddr) public {
        require(msg.sender == devaddr, "dev: wut?");
        devaddr = _devaddr;
    }
}
