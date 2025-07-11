import { ethers, network } from "hardhat";
import { writeFileSync } from "fs";

async function main() {

  let admin, treasury, dev;
  const networkName = network.name;
  let startblock = 1; //필요시 수정(스테이킹 보상 시작 블록)

  dev = "0xb24EbC1Cb554A2882201C963885981E4841675Ad";  //set dev
  admin = "0xD11D26c054f3F65e452f20f0989C4CcA1072a5d8"; //set admin
  treasury = "0x55C18Fc38e58fb963Dd50DDa9bE7202Cb49a9eFD"; //set treasury

  console.log("Dev:", dev);
  console.log("Admin:", admin);
  console.log("Treasury:", treasury);

  console.log("Multicall2 배포");
  const Multicall = await ethers.getContractFactory("Multicall2");
  const Multicallcontract = await Multicall.deploy();
  await Multicallcontract.deployed();
  const Multicallcontractaddress = Multicallcontract.address;
  console.log("Multicall deployed to:", Multicallcontractaddress);


  console.log("WXPT Token 배포");
  const WXPTtoken = await ethers.getContractFactory("WXPT");
  const WXPTtokencontract = await WXPTtoken.deploy();
  await WXPTtokencontract.deployed();
  const WXPTtokencontractaddress = WXPTtokencontract.address;
  console.log("WXPTToken deployed to:", WXPTtokencontractaddress);
  
  console.log("XWARP 토큰 배포");
  //XWARPToken 배포
  const XWARPContract = await ethers.getContractFactory("XWARPToken");
  const XWARPtoken = await XWARPContract.deploy()
  await XWARPtoken.deployed();
  const XWARPAddress = XWARPtoken.address;
  console.log("XWARPtoken deployed to:", XWARPAddress);

  await new Promise(f => setTimeout(f, 100));

  await XWARPtoken["mint(uint256)"](10000000000000000000000000000n); // 필요시 발행량 수정
  console.info('XWARPtoken Initial minted');

  await new Promise(f => setTimeout(f, 100));

  

  console.log("SXWARP 토큰 배포");
  //SXWARPToken 배포(스테이킹 영수증 토큰)
  const SXWARPContract = await ethers.getContractFactory("SXWARPBar");
  const SXWARPtoken = await SXWARPContract.deploy(XWARPAddress)
  await SXWARPtoken.deployed();
  const SXWARPAddress = SXWARPtoken.address;
  console.log("SXWARPtoken deployed to:", SXWARPAddress);

  await new Promise(f => setTimeout(f, 100));
  

  console.log("MasterChef 배포");
  //MasterChef 배포(스테이킹 컨트랙트)
  const MasterChefContract = await ethers.getContractFactory("MasterChef");
  // RewardFee: 보상 수령 시 수수료: 현재 2%, 현재 0~5%까지 설정 가능
  // Fee - 인출 시 수수료: 현재 2%, 최대 0~5%까지 설정 가능
  const MasterChef = await MasterChefContract.deploy(XWARPAddress, SXWARPAddress, dev,330000000000000000n, startblock, treasury) 
  // 필요시 보상량 수정(블록당 보상 즉 현재는 블록당 0.33개 - 블록이 1초마다 생성됨을 가정할 시 보상은 0.33*60*60*24*30/월)
  await MasterChef.deployed();
  const MasterChefAddress = MasterChef.address;
  console.log("MasterChef deployed to:", MasterChefAddress);

  await new Promise(f => setTimeout(f, 100));

  await XWARPtoken["transferOwnership(address)"](MasterChefAddress);
  console.info('MasterChefAddress transferOwnership complete');

  await new Promise(f => setTimeout(f, 100));

  const SXWARP = await ethers.getContractFactory("SXWARPBar");
  const SXWARPcontract = await SXWARP.attach(SXWARPAddress);  
  await SXWARPcontract["transferOwnership(address)"](MasterChefAddress);
  console.info('MasterChefAddress transferOwnership complete');

  await new Promise(f => setTimeout(f, 100));



  console.log("XWARPFactory 배포");
  // Factory (for swap)
  const XWARPFactory = await ethers.getContractFactory("XWARPFactory");
  const XWARPFactorycontract = await XWARPFactory.deploy(admin);
  await XWARPFactorycontract.deployed();
  const XWARPFactorycontractaddress = XWARPFactorycontract.address;
  console.log("XWARPFactory deployed to:", XWARPFactorycontractaddress);

  await new Promise(f => setTimeout(f, 100));

  const value = await XWARPFactorycontract.INIT_CODE_PAIR_HASH();
  console.log("INIT_CODE_PAIR_HASH is :",value); //XWARPLibrary.sol line 32 - init code hash 수정 필요(0x 제외하여 수정)

  const contracts = {
    XWARPtoken: XWARPAddress,
    SXWARPtoken: SXWARPAddress,
    MasterChef: MasterChefAddress,
    XWARPFactory: XWARPFactorycontractaddress,
  }

  writeFileSync(`./deployments/${network.name}.json`, JSON.stringify(contracts, null, 2))


};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
