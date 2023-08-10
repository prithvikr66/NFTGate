import React from 'react'
import img from "../../public/meme.png"
import { useNavigate } from 'react-router-dom'

const Members = () => {
    const navigateTo = useNavigate()
    const handleOnClick = () => {
        navigateTo("/")

    }
    return (
        <div className=' flex flex-col gap-8 items-center justify-center h-screen bg-black'>
            <h2 className=' text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold text-4xl'>Here is the much awaited Secret</h2>
            <img src={img} alt='imgg'
                className=' h-96' />
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900" onClick={handleOnClick}>Home</button>
        </div>
    )
}

export default Members