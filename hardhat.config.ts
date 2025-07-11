require("@nomicfoundation/hardhat-toolbox");
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";

require('dotenv').config()


      module.exports =  {
  solidity: {
    compilers: [
              {
                version: "0.5.16",
                settings: {},
              },
              {
                version: "0.6.12",
                settings: {},
              },
              {
                version: "0.8.4",
                settings: {},
              },
              {
                version: "0.6.6",
                settings: {},
              },
              {
                version: "0.4.18",
                settings: {},
              },{
                version: "0.8.0",
                settings: {},
              }
            ],
            settings: {
              optimizer: {
                runs: 200,
                enabled: true
              }
            }
          },
  defaultNetwork: "xphere",
  networks: {
    testnet: {
      url: "https://testnet.x-phere.com",
      chainId: 1998991,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    xphere: {
      url: "https://en-bkk.x-phere.com",
      chainId: 20250217,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
   },

};

// export default config;