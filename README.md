# XWARP Project

XWARP is a blockchain-based DeFi project that provides staking and swap functionalities. This repository contains the smart contracts and deployment scripts for the XWARP project.

## Main Components

- **XWARP Token**: Main governance token
- **SXWARP Token**: Staking receipt token
- **MasterChef**: Staking and reward contract
- **XWARPFactory**: Swap pair creation contract
- **XWARPRouter**: Swap routing contract
- **WXPT**: Wrapped XPT token (ERC-20 wrapper for the native token)
- **Multicall2**: Utility for multi-contract calls

## Contract Deployment

### Deploying Main Contracts

Use the `deploy.ts` script to deploy the following contracts:
- Multicall2
- WXPT Token
- XWARP Token
- SXWARP Token (staking receipt)
- MasterChef (staking contract)
- XWARPFactory (factory for swaps)

Before deployment, check the following settings:
- `dev`: Developer address
- `admin`: Admin address
- `treasury`: Treasury address
- `startblock`: Block number to start staking rewards

Deployment command:

```bash
npx hardhat run scripts/deploy.ts --network <network_name>
```

After deployment, contract addresses will be saved in the `deployments/<network_name>.json` file.

### Deploying Router Contract

Use the `deploy_router.ts` script to deploy the XWARPRouter contract.

Before deployment, check the following settings:
- `XWARPFactorycontractaddress`: Factory contract address
- `Xwarp_testnet`: WXPT token address on the network

Deployment command:

```bash
npx hardhat run scripts/deploy_router.ts --network <network_name>
```

## Contract Information

### MasterChef

The staking contract includes the following settings:
- **RewardFee**: Fee on reward claim (currently 2%, can be set between 0~5%)
- **Fee**: Withdrawal fee (currently 2%, can be set between 0~5%)
- **Reward per block**: Currently 0.33 XWARP (assuming 1 block per second)

### XWARPFactory

Factory contract for creating swap pairs. After deployment, check the `INIT_CODE_PAIR_HASH` value. This value is needed to update the init code hash at line 32 in the `XWARPLibrary.sol` file (without the 0x prefix).

# Deployment Script Modification Guide

Before deploying, modify the following parts to fit your environment:

## 🔧 Required Modifications

### 1. Set Admin Addresses (Lines 7-11)
```typescript
dev = "";       // Developer address - receives staking rewards
admin = "";     // Admin address - manages swap fees  
treasury = "";  // Treasury address - receives withdrawal/reward fees
```

### 2. Staking Start Block (Line 6)
```typescript
let startblock = 1; // Change to the block number when staking rewards should start
```

### 3. Initial Token Supply (Line 31)
```typescript
await XWARPtoken["mint(uint256)"](10000000000000000000000000000n); 
// Current: 10,000,000,000 tokens (10^28 wei)
// Adjust supply as needed
```

### 4. Reward per Block (Lines 46-48)
```typescript
const MasterChef = await MasterChefContract.deploy(
  XWARPAddress, 
  SXWARPAddress, 
  dev,
  330000000000000000n, // 0.33 tokens per block - modify if needed
  startblock, 
  treasury
)
```

### 5. Fee Settings (MasterChef.sol Lines 51-54)
```solidity
uint256 public Fee = 200;       // Withdrawal fee: 2% (range: 0-5%)
uint256 public RewardFee = 200; // Reward claim fee: 2% (range: 0-5%)
// Change fee rates as needed (200 = 2%, 500 = 5%)
```

### 6. Token Name/Symbol (XWARPToken.sol Line 7)
```solidity
contract XWARPToken is ERC20("XWARPT", "XWARPT") {
// First "XWARPT": Token name (e.g., "XWARP Token")
// Second "XWARPT": Token symbol (e.g., "XWARP")
```

### 7. LP Token Name/Symbol (XWARPERC20.sol Lines 9-10)
```solidity
string public constant name = "XWARP LPs";      // Change LP token name
string public constant symbol = "XWARP-LP";     // Change LP token symbol
```

## ⚠️ Additional Steps Required

### 8. Update INIT_CODE_PAIR_HASH (Lines 82-83)
After deployment, copy the output `INIT_CODE_PAIR_HASH` value and:
- Update line 32 in the `XWARPLibrary.sol` file
- Remove the `0x` prefix and enter only the hash value

## 📝 Current Settings

- **Withdrawal Fee**: 2% (adjustable between 0-5%)
- **Reward Claim Fee**: 2% (adjustable between 0-5%)  
- **Block Generation Interval**: Assumed 1 second
- **Estimated Monthly Rewards**: About 857,520 tokens (0.33 × 60 × 60 × 24 × 30)

## 📋 Modification Checklist

- [ ] Set all 3 admin addresses
- [ ] Set staking start block number
- [ ] Adjust initial token supply
- [ ] Adjust reward per block
- [ ] Set fee rates (withdrawal/reward claim)
- [ ] Change main token name/symbol
- [ ] Change LP token name/symbol
- [ ] Update INIT_CODE_PAIR_HASH after deployment
