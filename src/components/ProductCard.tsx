import React from 'react'
import Image from 'next/image';
import { AiFillStar,AiOutlineStar} from 'react-icons/ai';

    interface propsType{ 
    img:string;
    title:string;
    desc:string;
    rating:number;
    price:string;
}

const ProductCard:React.FC<propsType> = ({
    img,
    title,
    desc,
    rating,
    price,
}) => {

    const generateRating=(rating:number)=>{
        switch(rating){
            case 1:
                return(
                    <div className="flex gap-1 text-[20px] text-[#ef4444]">
                        <AiFillStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                    </div>
                )
                case 2:
                    return(
                        <div className="flex gap-1 text-[20px] text-[#ef4444]">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </div>
                    );
                    case 3:
                        return(
                            <div className="flex gap-1 text-[20px] text-[#ef4444]">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                            </div>
                        );
                        case 4:
                        return(
                            <div className="flex gap-1 text-[20px] text-[#ef4444]">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
                            </div>
                        );
                        case 5:
                        return(
                            <div className="flex gap-1 text-[20px] text-[#ef4444]">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                        );
                        
              default:
                return null;
        }
    }
  return (
    <div className="px-5 border border-gray-200 rounded-2xl max-w-[600px]">
        <div>
            <Image className="w-full h-auto"
            src={img} 
            width={200} 
            height={300} 
            alt={title}/>
        </div>
        <div className="space-y-2 py-2">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
            <p className="text-gray-500 max-w-[150px]">{desc}</p>
            <div>{generateRating(rating)}
            <div className="font-bold flex gap-5">
            ₺{price}
            <del className="text-gray-500 font-normal ">₺{parseInt(price)+50}</del>
        </div>
    </div>
    </div>
    </div>

  )
}

export default ProductCard