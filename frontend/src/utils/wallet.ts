import { ethers } from "ethers";

export const connectMetamaskWallet = async () : Promise<any> => {
  
    try {
      let signer = null;

       // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    console.log('window.ethereum', window.ethereum);
    let provider;
    if (!window.ethereum) {
        provider = ethers.getDefaultProvider();
      throw new Error('MetaMask is not installed, Please install it!');
    }
    // Create a new instance of ethers.js provider

    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
     provider = new ethers.BrowserProvider(window.ethereum);

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer = await provider.getSigner();

    // Request account access if needed
    await provider.send("eth_requestAccounts", []);
    // Get the user's Ethereum address
    const address = await signer.getAddress();


    const balanceWei = await provider.getBalance(address);
    const balanceEth = ethers.formatEther(balanceWei);
    return {
        address,
        balance: balanceEth,
    }
    } catch (err) {
      console.error('Wallet connection error:', err);
      return {
        address: null,
        balance: null,
        error: err,
      }
    }
  }