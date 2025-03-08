# DLS dApp & Utility Token ($DLS) - Smart Contract README

Overview
DLS Utility Token is an ERC-20 token built on Polygon, designed for **loyalty rewards, secure metadata storage, NFT-based ownership, decentralized media sharing, and collateralization.** 

This document provides an overview of the **contract structure, variables, and functionalities**.

---

**Smart Contract Specifications**
- **Token Standard**: ERC-20
- **Blockchain**: Polygon (MATIC)
- **Total Supply**: 1,000,000,000 DLS (Fixed)
- **Minting**: ❌ No (Pre-minted supply)
- **Burnable**: ✅ Yes
- **Staking Mechanism**: ✅ Yes
- **Governance**: ✅ Yes
- **Collateralization**: ✅ Yes
- **NFT Minting & Utility**: ✅ Yes

---

**Contract Variables**
| Variable | Type | Description |
|----------|------|-------------|
| `_totalSupply` | `uint256` | Fixed total supply of 1 billion DLS |
| `balances` | `mapping(address => uint256)` | Tracks each account's DLS balance |
| `allowance` | `mapping(address => mapping(address => uint256))` | Approvals for token spending |
| `stakingPool` | `mapping(address => uint256)` | Stores staked DLS tokens |
| `governanceVotes` | `mapping(address => uint256)` | Tracks governance votes per holder |
| `collateralizedAssets` | `mapping(address => uint256)` | Stores collateralized token amounts |
| `nftOwners` | `mapping(uint256 => address)` | Tracks NFT ownership |

---

**Key Contract Functions**
**1. Standard ERC-20 Functions**
- `transfer(address _to, uint256 _amount)`: Transfers DLS tokens.
- `approve(address _spender, uint256 _amount)`: Approves spending allowance.
- `transferFrom(address _from, address _to, uint256 _amount)`: Transfers tokens based on allowance.
- `balanceOf(address _owner) view returns (uint256)`: Returns the DLS balance of an account.
- `totalSupply() view returns (uint256)`: Returns the total supply.

---

**2. Staking Mechanism**
**Functionality:** Users can **stake** their DLS tokens in a **staking pool** to earn rewards.
- `stake(uint256 _amount)`: Locks tokens into the staking pool.
- `unstake(uint256 _amount)`: Withdraws staked tokens after a locking period.
- `claimstaking()`: Claims staking rewards based on the staked amount and duration.

**Staking Rewards Formula**:  
\[ Rewards = \text{Staked Amount} \times \text{APY Rate} \times \text{Time Staked} \]

---

**3. Governance (DAO Voting)**
**Functionality:** DLS holders can **vote on proposals** using their token balance.
- `createProposal(string _description, uint256 _duration)`: Submits a new governance proposal.
- `vote(uint256 _proposalId, bool _support)`: Votes on an active proposal.
- `executeProposal(uint256 _proposalId)`: Executes a proposal if it passes.

---

**4. Lending & Collateralization**
**Functionality:** Users can use **DLS tokens as collateral** for loans.
- `depositCollateral(uint256 _amount)`: Locks DLS tokens as collateral.
- `withdrawCollateral(uint256 _amount)`: Unlocks collateralized tokens if the loan is repaid.
- `borrow(uint256 _amount)`: Issues a loan based on **Loan-to-Value (LTV) ratio**.

**Collateralization Ratio**:  
\[ \text{LTV Ratio} = \frac{\text{Borrowed Amount}}{\text{Collateral Deposited}} \]

---

**5. NFT Minting**
**Functionality** Users can **mint NFTs representing ownership of media assets.**
- `mintNFT(string _metadataURI)`: Mints an NFT tied to a specific media file.
- `transferNFT(uint256 _nftId, address _to)`: Transfers NFT ownership.
- `burnNFT(uint256 _nftId)`: Removes an NFT from circulation.

**Integration with IPFS/Arweave for Metadata Storage**

---

**Security Features**
- **Multi-Sig Approval for Governance Transactions**
- **Re-entrancy Guard**
- **Rate Limits for Staking Withdrawals**
- **Liquidity Lock for Stability**

---

**Deployment & Interaction**
**Deployment Steps**
1. Deploy ERC-20 token contract on **Polygon Testnet**.
2. Conduct security audit before **mainnet launch**.
3. Integrate staking, lending, and NFT modules.

**Interacting with the Contract**
- Use **Etherscan or Hardhat** to interact with smart contract functions.
- dApp interface will allow staking, voting, and NFT minting.


**Contact & Support**
📧 **Email**: Josh@digitallegacystudios.com  
🌍 **Website**: [www.digitallegacystudios.com](http://www.digitallegacystudios.com)  
🚀 **GitHub Repo**: *Coming Soon*

**Install Dependencies**
npm install

**Configure .env File**
REACT_APP_INFURA_ID=<YOUR_INFURA_ID>
REACT_APP_POLYGON_RPC=<POLYGON_RPC_URL>
REACT_APP_SMART_CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>

**Run the dApp Locally**
npm start
✅ Access the app at: http://localhost:3000

User Guide
Connect Wallet: Click "Connect Wallet" (MetaMask or WalletConnect).
Stake DLS: Enter the amount and click "Stake".
Vote on Proposals: Select an active proposal and submit your vote.
Mint NFT: Upload a file and click "Mint NFT".
Borrow & Collateralize: Deposit DLS and request a loan.
Contact & Support
📧 Email: support@digitallegacystudios.com
🌍 Website: www.digitallegacystudios.com
🚀 GitHub Repo: Coming Soon

These README files will help users and developers interact with **DLS Token and dApp** efficiently. Let me know if you need additional details or refinements! 🚀












