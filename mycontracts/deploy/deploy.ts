import { DeployFunction } from 'hardhat-deploy/types';
import { Contract } from "ethers"

const func: DeployFunction = async function ({ deployments, getNamedAccounts, ethers }) {
    console.log("DEPLOYING...")
    const { deploy } = deployments;
    const { deployer } = await ethers.getNamedSigners();
    await deploy('MyContract', {
        from: deployer.address,
        log: true,
    });

    const contract = await ethers.getContract('MyContract') as Contract;
    await contract.connect(deployer).addAddress("0x6BCC51537721024bA17f284c47A1b216152676ca");
    console.log("done")
};

export default func;
