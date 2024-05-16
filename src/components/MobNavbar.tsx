import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineHome } from 'react-icons/ai'
import {FiHeart} from "react-icons/fi"


const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbR px-8">
        <div className="flex justify-between text-[32px] py-2">
            <IoMenuOutline/>
            <div className="relative">
                <HiOutlineShoppingBag/>
                <div className="bg-violet-300 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 translate-y-1">
                    0
                </div>
            </div>
            <AiOutlineHome/>
            <div className="relative">
                <FiHeart/>
                <div className="bg-violet-300 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
                    0
                </div>
            </div>
            <AiOutlineAppstore/>
        </div>

    </div>
  )
}

export default MobNavbar