import { ethers, network } from "hardhat";
import { writeFileSync } from "fs";
import * as fs from 'fs';

async function main() {
  
  // const filePath = `./deployments/${network.name}.json`;
  // const rawData = fs.readFileSync(filePath, 'utf-8');
  // const contracts = JSON.parse(rawData);
  const XWARPFactorycontractaddress = "0x90ABd2017D1Cfc1341359079Ad8da913fb58015D"; // Factory 주소 입력
  

  //XWARPRouter 배포
  console.log("XWARPRouter 배포");
  let Xwarp_testnet = "0xc9b3e4BA3300D2b410AF6af3997c2fE470108836"; // Mainnet WXPT 주소 입력
  let WXPT = Xwarp_testnet;

  const XWARPRouter = await ethers.getContractFactory("XWARPRouter");
  const XWARPRoutercontract = await XWARPRouter.deploy(XWARPFactorycontractaddress, WXPT);
  await XWARPRoutercontract.deployed();
  const XWARPRoutercontractaddress = XWARPRoutercontract.address;
  console.log("XWARPRouter deployed to:", XWARPRoutercontractaddress);

  // contracts.XWARPRouter = XWARPRoutercontractaddress;
  // const updatedData = JSON.stringify(contracts, null, 2);
  // fs.writeFileSync(filePath, updatedData);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });