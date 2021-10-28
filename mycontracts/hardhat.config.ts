import 'dotenv/config';
import { HardhatUserConfig } from "hardhat/config";

import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";

console.log("process.env.ALCHEMY", process.env.ALCHEMY)

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            accounts: { mnemonic: process.env.MNEMONIC, count: 10 },
            live: true,
            blockGasLimit: 125e5,
            hardfork: 'london',
            forking: {
                enabled: true,
                url: process.env.ALCHEMY as string
            },
            mining: { auto: true },
            chainId: 1337,
        },
    },
    solidity: {
        version: "0.8.2",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000
            }
        }
    },
    namedAccounts: {
        deployer: 0,
        tester: 1,
        account10: 9,
    },
    paths: {
        sources: "./contracts",
    },
};

export default config;
