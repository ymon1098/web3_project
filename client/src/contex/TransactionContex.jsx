import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContex = React.createContext();

const {etherum} = window;

const getEtherumContract = () =>{
    const provider = new ethers.providers.Web3Provider(etherum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({children}) =>{
    return(
        <TransactionContex.Provider value={{value: 'test'}}>
            {/* 1:41:33 */}
            {children}
        </TransactionContex.Provider>
    )
}