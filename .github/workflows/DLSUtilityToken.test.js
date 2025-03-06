const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DLS Utility Token", function () {
    let DLSUtilityToken, dls, owner, addr1, addr2;

    beforeEach(async function () {
        DLSUtilityToken = await ethers.getContractFactory("DLSUtilityToken");
        [owner, addr1, addr2] = await ethers.getSigners();
        dls = await DLSUtilityToken.deploy();
    });

    it("Should assign the total supply of tokens to the owner", async function () {
        const ownerBalance = await dls.balanceOf(owner.address);
        expect(await dls.totalSupply()).to.equal(ownerBalance);
    });

    it("Should allow users to transfer tokens", async function () {
        await dls.transfer(addr1.address, 100);
        expect(await dls.balanceOf(addr1.address)).to.equal(100);
    });

    it("Should allow users to burn tokens", async function () {
        await dls.burn(50);
        expect(await dls.totalSupply()).to.equal(await dls.balanceOf(owner.address));
    });
});
npx hardhat test
npx hardhat run scripts/deploy.js --network mumbai
npx hardhat verify --network mumbai CONTRACT_ADDRESS
cd frontend
npm install ethers web3modal
import { ethers } from "ethers";

export async function connectWallet() {
    if (!window.ethereum) {
        alert("Please install MetaMask.");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    return accounts[0]; // Return connected wallet address
}
import { ethers } from "ethers";
import DLSUtilityToken from "../contracts/DLSUtilityToken.json"; // Replace with ABI path

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = DLSUtilityToken.abi;

export async function getTokenBalance(address) {
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return await contract.balanceOf(address);
}
npm run dev
