import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Wallet = () => {
    const [isConnected, setIsConnected] = useState(false);
    const navigateTo = useNavigate()
    const connectWallet = async () => {

        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
                // navigateTo("/Home", { state: { address: accounts[0] } })

            }
            else {
                alert("Install Metamask")
            }

        } catch (error) {
            console.log(error)

        }

    }

    return (


        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " onClick={connectWallet}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center text-2xl gap-4">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png'
                    className=' h-14' />
                Connect wallet
            </span>
        </button>



    )
}

export default Wallet