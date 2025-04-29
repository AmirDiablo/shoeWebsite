import { useState, useRef } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Landing3 = () => {
    const myRef = useRef()
    const [number, setNumber] = useState(0)
        
            const shoes = [
                {id:1, file: "shoes13.png"},
                {id:2, file: "shoes14.png"},
                {id:3, file: "shoes15.png"}
            ]
        
            const changeNumber = ()=> {
                myRef.current.style.transform = "translate(100px)"
                myRef.current.style.opacity = "0"

                setTimeout(()=> {
                    if(number < shoes.length-1){
                        setNumber(number+1)
                    }else{
                        setNumber(0)
                    }
                    myRef.current.style.transform = "translate(0px)"
                    myRef.current.style.opacity = "1"
                }, 1000)

            }

    return ( 
        <div className="flex justify-center-safe items-center p-10 relative">
            <div className="w-[40vw]">
                <p className="font-bold text-[5vw] w-max md:text-[4vw]">Find Your Flow</p>
                <p className="text-gray-600 text-[3vw] md:text-[2vw]">
                    Join us on the mat for a live
                    workout or session on the Nike Training Club app
                </p>
                <div className="bg-black text-white w-max px-5 py-1 rounded-sm mt-5">Shop Now</div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div ref={myRef} className="bg-gray-700/10 rounded-full aspect-square flex flex-col justify-center items-center md:scale-70 shoe">
                    <img src={shoes[number].file} className="-rotate-25 scale-120 w-[45vw]" />
                </div>
                <div className="flex w-max dots lg:-mt-17">
                    <p className={number == "0" ? "bg-black" : "bg-gray-700/15"}></p>
                    <p className={number == "1" ? "bg-black" : "bg-gray-700/15"}></p>
                    <p className={number == "2" ? "bg-black" : "bg-gray-700/15"}></p>
                </div>
            </div>

            <FaRegArrowAltCircleRight className="absolute bottom-0 right-10 text-2xl md:right-20 md:text-4xl cursor-pointer" onClick={changeNumber} />
            <div className="flex absolute bottom-0 left-10 gap-3 md:ml-10 lg:ml-20 lg:gap-5 lg:text-2xl">
                <FaTwitter />
                <FaFacebookF />
            </div>
        </div>
     );
}
 
export default Landing3;