import { useState } from "react";

const Landing2 = () => {

    const [number, setNumber] = useState(0)
    
        const shoes = [
            {id:1, file: "shoes6.png"},
            {id:2, file: "shoes9.png"},
            {id:3, file: "shoes12.png"}
        ]
    
        const changeNumber = (num)=> {
            setNumber(num)
        }

    return ( 
        <div className="md:flex flex-row items-center md:justify-between  md:h-screen">
            <div className="flex p-2 items-center flex-none justify-center">
                <div className="bg-gray-300/40 rounded-full aspect-square m-4 flex mr-8 ">
                    <img src={"/"+shoes[number].file} />
                </div>
                <div className="md:w-50 md:mr-20">
                    <p className="font-bold text-4xl"><p>Nike</p><p>Fly High</p></p>
                    <p className="text-gray-500 text-[12px] my-5 md:my-10">Innovation at it's best. With the technology developed by our scientists, you'll literally fly</p>
                    <p className="bg-black text-white px-10 py-1 text-center mb-2">Shop Now</p>
                    <p className="text-gray-500 text-[12px] text-center">Learn More...</p>
                </div>
            </div>
            <div className="font-bold flex gap-15 justify-center mt-6 text-gray-500 md:order-first md:flex-col md:ml-25 md:text-2xl">
                <p onClick={()=> changeNumber(0)} className={number == "0" && "text-black"}>01</p>
                <p onClick={()=> changeNumber(1)} className={number == "1" && "text-black"}>02</p>
                <p onClick={()=> changeNumber(2)} className={number == "2" && "text-black"}>03</p>
            </div>
        </div>
     );
}
 
export default Landing2;