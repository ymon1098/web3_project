import React, {useContext, useState} from 'react';
import { TransactionContex } from '../contex/TransactionContex';
import Loader from './Loader';
import { shortenAddress } from '../utils/shortenAddress';

const Input = ({placeholder, name, type, value, handleChange}) =>(
    <input 
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-2 text-sm white-glassmorphism"
    ></input>
);

const Welcome = () =>{
    const {connectWallet, currentAccount, formData, handleChange, sendTransaction} = useContext(TransactionContex);

    const handleSubmit = (e) =>{
        const {addressTo, amount, keyword, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return (
        <div>
            <h1>Welcome page</h1>
            <h2>Your Address: {shortenAddress(currentAccount.toString())}</h2>
            {!currentAccount && (<button type='button' onClick={connectWallet} class="h-10 w-40 m-10 rounded-full bg-sky-500 hover:bg-sky-700">Connect Wallet</button>
            )}
            <h2>Place data to forms</h2>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input placeholder="Address To" name='addressTo' type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name='amount' type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (Gif)" name='keyword' type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name='message' type="text" handleChange={handleChange} />

            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {false ? (
                <Loader />
            ) : (
                <div>
                    <button
                        type='button'
                        onClick={handleSubmit}
                        className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>
                        Send Now
                    </button>
                </div>
            )}

            </div>
        </div>
    )
}

export default Welcome;