"use client"
import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false,
      };
      const slideData=[
        {
            id:0,
            img:"/banner-1.jpg",
            title:"Trending Item",
            mainTitle:"Kadın Son Moda İndirimi",
            price:"1599₺",
        },
        {
            id:1,
            img:"/banner-2.jpg",
            title:"Trending Accessories",
            mainTitle:"Modern Güneş Gözlükleri",
            price:"5399₺",
        },
        {
            id:2,
            img:"/banner-3.jpg",
            title:"Sale Offer",
            mainTitle:"Yeni Moda Yaz İndirimleri",
            price:"999₺",
        },
      ];
    
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item)=>( 
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />))}
            </Slider>
        </div>
      </div>
  );
};

export default Hero