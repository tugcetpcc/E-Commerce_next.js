import React from 'react'
import { BsSearch} from "react-icons/bs";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";


const HeaderMain = () => {
  return (
    <div className="border-b border-gray-300 py-6 ">
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-3xl text-center pb-6 sm:pb-0 text-blackish">|MEY|
            </div>
            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input className="border-gray-300 border p-4 px-5 rounded-lg w-full" type="text" placeholder="Ara..."/>
                <BsSearch className="absolute right-0 top-0 mr-7 mt-4 text-gray-400" size={20}/>
            </div>
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                <BiUser/>

                <div className="relative">
                    <FiHeart/>
                    <div className="bg-violet-300 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-2">
                        0
                    </div>
                </div>
                
                <div className="relative">
                    <HiOutlineShoppingBag/>
                    <div className="bg-violet-300 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-2">
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain