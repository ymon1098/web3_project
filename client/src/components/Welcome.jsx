import React, {useContext, useState} from 'react';
import { TransactionContex } from '../contex/TransactionContex';

const Welcome = () =>{
    const {connectWallet} = useContext(TransactionContex);

    const handleSubmit = () =>{

    }

    return (
        <div>
            <h1>Welcome page</h1>
            <button type='button' onClick={connectWallet} class="h-10 w-40 m-10 rounded-full bg-sky-500 hover:bg-sky-700">Connect Wallet</button>
        </div>
    )
}

export default Welcome;