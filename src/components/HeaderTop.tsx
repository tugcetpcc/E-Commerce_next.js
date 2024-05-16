import React from 'react'
import { BsFacebook,BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
        <div className="container py-3">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header-top__icon_wrapper">
                    <BsFacebook/>
                    </div>
                    <div className="header-top__icon_wrapper">
                    <BsTwitter/>
                    </div>
                    <div className="header-top__icon_wrapper">
                    <BsInstagram/>
                    </div>
                    <div className="header-top__icon_wrapper">
                    <BsLinkedin/>
                    </div>
                </div>
                <div className="text-gray-500 text-[12px]">
                    <b>BU HAFTA</b> 450 TL ÜZERİ SİPARİŞLERDE KARGO BEDAVA
                </div>
                <div className="flex gap-4">
                    <select className="text-gray-500 text-[12px] w-[70px]" name="currency" id="currency">
                        <option value="USD $">USD $</option>
                        <option value="EUR €">EUR €</option>
                        <option value="TR ₺">TR ₺</option>
                    </select>

                    <select className="text-gray-500 text-[12px] w-[80px]"name="language"id="language">
                        <option value="English">English</option>
                        <option value="Türkçe">Türkçe</option>   
                        </select> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop