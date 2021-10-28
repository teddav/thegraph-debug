import { ethers, artifacts } from 'hardhat';

async function main() {
    const { deployer } = await ethers.getNamedSigners();

    const contract = await ethers.getContract('MyContract');

    const ADDRESSES = [
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
        "0x3931C80BF7a911fcda8b684b23A433D124b59F06",
    ]

    for (const address of ADDRESSES) {
        const tx = await contract.connect(deployer).addAddress(address, {
            gasLimit: 1e6
        });
        console.log("tx", tx);
        const receipt = await tx.wait();
        console.log("receipt", receipt);
    }

    // for (let i = 0; i < 5; i++) {
    //     console.log(await contract.myaddresses(i));
    // }
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});

