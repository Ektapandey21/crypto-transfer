import React,{useContext} from "react";
import {TransactionContext} from '../context/TransactionContext';
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import { SiHellofresh } from "react-icons/si";

const TransactionCard =({addressTo,addressFrom,timestamp,message,keyword,amount,url})=>{
    return (
        <div className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        flex-col p-3 rounded-md hover:shadow-2xl
        ">
        <div className="flex flex-col items-center w-full mt-3">
        <div className=" w-full mb-6 p-2">
        <a href={`https://goerli.etherscan.io//address/$(addressFrom)`} target="_blank" rel="noopener noreferrer" >
            <p className="text-white text-base">From: {shortenAddress(addressFrom)} </p>
        </a>
        <a href={`https://goerli.etherscan.io//address/$(addressTo)`} target="_blank" rel="noopener noreferrer" >
            <p className="text-white text-base">To: {shortenAddress(addressTo)} </p>
        </a>
        <p className="text-white text-base">Amount:{amount}ETH</p>
        {message && (
            <>
              <br/>
              <p className="text-white text-base">{Message} </p>  
            </>
        )}

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}

            </p>
        </div>

        </div>
        </div>
        </div>
    )
    
}
const Transaction = () =>{
    const {currentAccount}=useContext(TransactionContext);

    return(
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:pd-12 py-12 px-4">
        {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">Latest Transaction</h3>
        ):(
            <h3 className="text-white text-3xl text-center my-2">connect ur acc to see the latest transactions</h3> 
        )}
        <div className="flex flex-wrap justify-center itemms-center mt-10">
            {dummyData.reverse().map((Transaction,i)=>(
                <TransactionCard key={i} {...Transaction}/>
            ))}
        </div>
        </div>
        </div>
    );
}
export default Transaction;