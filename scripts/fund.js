// imports
const { ethers, getNamedAccounts } = require("hardhat")

// async main
async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contract..")
    const txResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.05"),
    })
    await txResponse.wait(1)
    console.log("Funded!")
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
