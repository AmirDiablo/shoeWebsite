import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import shoes3 from "../assets/shoes3.png"
import shoes1 from "../assets/shoes.png"
import shoes2 from "../assets/shoes2.png"
import shoes4 from "../assets/shoes4.png"

const Example1 = () => {
    /* const [shoes, setShoes] = useState([]) */

    const shoes = [
        {name: "AIR ZOOM PEGAUSUS" , price: 749.00 , prevPrice: 990.00, image: "../assets/shoes3.png"},
        {name: "NIKE C1TY" , price: 85.00 , prevPrice: 100.00, image: "../assets/shoes3.png"},
        {name: "NIKE VOMERO 5" , price: 136.00 , prevPrice: 153.00, image: "../assets/shoes3.png"},
        {name: "NIKE SHOX TL" , price: 170.00 , prevPrice: 190.00, image: "../assets/shoes3.png"}
    ]

    return ( 
        <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap" >
            
            <div className="rounded-4xl bg-fuchsia-200/45 aspect-square w-80 flex flex-row text-center overflow-hidden group" >
                <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                    <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 ">AIR ZOOM PEGAUSUS</p>
                </div>
                <div className="translate-y-[50px] transition duration-300 delay-150 group-hover:translate-x-[20px]">
                    <img src={shoes3} className="w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30" />
                    <div className="flex flex-row mb-10 justify-center gap-18 items-center">
                        <FaRegHeart className="text-2xl"/>
                        <div>
                            <p className="text-red-600 line-through">$990.00</p>
                            <p className="font-bold">$749.00</p>
                        </div>
                        <MdOutlineShoppingCart className="text-2xl" />
                    </div>
                </div>
                
            </div>


            

            <div className="rounded-4xl bg-blue-100 aspect-square w-80 flex flex-row text-center overflow-hidden group" >
                <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                    <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 ">NIKE C1TY</p>
                </div>
                <div className="translate-y-[50px] transition duration-300 delay-150 group-hover:translate-x-[20px]">
                    <img src={shoes1} className="w-65 p-10 m-auto items-center transition duration-300 delay-150 group-hover:rotate-30" />
                    <div className="flex flex-row mb-10 justify-center gap-18 items-center">
                        <FaRegHeart className="text-2xl"/>
                        <div>
                            <p className="text-red-600 line-through">$100.00</p>
                            <p className="font-bold">$85.00</p>
                        </div>
                        <MdOutlineShoppingCart className="text-2xl" />
                    </div>
                </div>
                
            </div>

            <div className="rounded-4xl bg-orange-200 aspect-square w-80 flex flex-row text-center overflow-hidden group" >
                <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                    <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 ">NIKE VOMERO 5</p>
                </div>
                <div className="translate-y-[50px] transition duration-300 delay-150 group-hover:translate-x-[20px]">
                    <img src={shoes2} className="w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30" />
                    <div className="flex flex-row mb-10 justify-center gap-18 items-center">
                        <FaRegHeart className="text-2xl"/>
                        <div>
                            <p className="text-red-600 line-through">$153.00</p>
                            <p className="font-bold">136.00</p>
                        </div>
                        <MdOutlineShoppingCart className="text-2xl" />
                    </div>
                </div>
                
            </div>


            <div className="rounded-4xl bg-purple-200 aspect-square w-80 flex flex-row text-center overflow-hidden group" >
                <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                    <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 ">NIKE SHOX TL</p>
                </div>
                <div className="translate-y-[50px] transition duration-300 delay-150 group-hover:translate-x-[20px]">
                    <img src={shoes4} className="w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30" />
                    <div className="flex flex-row mb-10 justify-center gap-18 items-center">
                        <FaRegHeart className="text-2xl"/>
                        <div>
                            <p className="text-red-600 line-through">$190.00</p>
                            <p className="font-bold">170.00</p>
                        </div>
                        <MdOutlineShoppingCart className="text-2xl" />
                    </div>
                </div>
                
            </div>

        </div>
    );
}
 
export default Example1;