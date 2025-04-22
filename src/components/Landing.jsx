import { useState } from "react";

const Landing = () => {
    const [number, setNumber] = useState(0)

    const shoes = [
        {id:1, file: "shoes6.png"},
        {id:2, file: "shoes9.png"},
        {id:3, file: "shoes10.png"}
    ]

    const changeNumber = (num)=> {
        setNumber(num)
    }

    return ( 
        <div className="md:flex flex-row items-center md:justify-between  md:h-screen">
            <div className="flex p-2 items-center flex-none justify-center">
                <img src={"/"+shoes[number].file} className="w-[50%] w-max-z-w-[50%] min-w-[50%] h-auto object-cover overflow-hidden mt-4 mx-3 flex-none drop-shadow-2xl md:w-[60%] md:mr-15" />
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
 
export default Landing;