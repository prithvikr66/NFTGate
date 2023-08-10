import React, { useState } from 'react'
import Wallet from './Wallet';
import key from "../../public/Vector.png"
// import KeyIcon from '@mui/icons-material/Key';
import { useNavigate, useLocation } from 'react-router-dom'
// import BiSolidKey from "react-icons/bi"
const Home = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const connectWallet = async () => {

        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
                // navigateTo("/Home", { state: { address: accounts[0] } })
                setIsConnected(true);
                return accounts[0];
            }
            else {
                alert("Install Metamask")
            }

        } catch (error) {
            console.log(error)

        }

    }


    // const location = useLocation();
    const navigateTo = useNavigate();
    const revealMsg = async () => {
        try {
            setLoader(true);
            const account = await connectWallet();
            const res = await fetch(`http://localhost:3000/members`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ from: account })
            })
            const data = await res.json();
            // console.log(data)
            if (data.status === 200) {
                navigateTo("/Members")
            } else {
                setLoader(false)
                // window.alert("You currently do not hold any NFT in collect address")
                setError(true)
            }

        } catch (error) {
            console.log(error)

        }
    }

    return (<>
        <nav className=' bg-black text-white flex justify-between p-10 '>
            <h2 className=' font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>NFT Gating</h2>


            {
                !isConnected ? (
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " onClick={connectWallet}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center text-xl gap-4  font-bold">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png'
                                className=' h-10' />
                            Connect wallet
                        </span>
                    </button>

                ) : (
                    <p></p>
                )
            }

        </nav>
        <div className=' bg-black h-screen flex 
        items-center justify-center flex-col gap-8'>



            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold" onClick={revealMsg}>
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl flex gap-4 font-bold">
                    {/* <BiSolidKey /> */}
                    <img src={key} alt='imggg' className=' h-10' />
                    Reveal Secret
                </span>
            </button>
            {
                loader ? (

                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only text-blue-700">Loading...</span>
                    </div>

                ) : (<p></p>)
            }
            {
                error ? (
                    <h3 className=' text-2xl text-red-600'>You do not own any NFTs..!</h3>
                ) : (
                    <p></p>
                )
            }

        </div>
    </>
    )
}

export default Home