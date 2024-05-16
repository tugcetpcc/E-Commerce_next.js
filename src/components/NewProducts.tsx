import React from 'react'
import ProductCard from './ProductCard';

const NewProducts = () => {
    const productsData=[ 
   {
    img:"/shirt-1.jpg",
    title:"Gömlek",
    desc:"Pamuklu Gömlek",
    rating:4,
    price:"4500₺",
   },
   {
    img:"/sports-1.jpg",
    title:"Spor Ayakkabı",
    desc:"Koşu Ayakkabısı",
    rating:3,
    price:"1999₺",
   },
   {
    img:"/watch-1.jpg",
    title:"Saat",
    desc:"Akıllı Saat",
    rating:4,
    price:"2399₺",

   },
   {
    img:"/watch-2.jpg",
    title:" Saat",
    desc:" Köse Saat",
    rating:4,
    price:"3499₺",
   },

    ];
  return (
    <div>
        <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Yeni Gelenler</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
    {productsData.map((item,index)=>(
        <ProductCard
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        rating={item.rating}
        price={item.price}
        />
    ))}

        </div>
        </div>
         </div>
  )
}

export default NewProducts