import React, { useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

declare let window: any;


export const WalletConnect = () => {
  const { ethereum } = window;
  const [accountsResult, setAccountsResult] = useState("Connect Wallet");
  
  //useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
  //      handleGetAccounts();
  //}, []);
  
  async function handleConnect() {
    const provider = await detectEthereumProvider();
	
	if (provider) {
	  // From now on, this should always be true:
	  // provider === window.ethereum
	  console.log('Detected MetaMask!');
	} else {
	  console.log('Please install MetaMask!');
	}
	
	
	try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
	  if (ethereum)
      await ethereum.request({ method: 'eth_requestAccounts' });
	  
	  const accounts = await ethereum.request({ method: 'eth_accounts' });
		//We take the first address in the array of addresses and display it
		setAccountsResult(accounts[0].slice(0, 10)+'...');
    } catch (error) {
      console.error(error);
    }
  };
  
  //async function handleGetAccounts() {
  //  const accounts = await ethereum.request({ method: 'eth_accounts' });
    //We take the first address in the array of addresses and display it
  //  setAccountsResult(accounts[0].slice(0, 10)+'...');
  //};
  return (
    <Button onClick={handleConnect} className="button200 floatright">{accountsResult}</Button>
  );
};

