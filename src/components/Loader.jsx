import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Loader = () => {

    return ( 
        <div className="animate-pulse flex flex-wrap justify-center mx-2">
            <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap mx-2">
                <div className="rounded-4xl bg-gray-200/100 aspect-square w-80 flex flex-row text-center overflow-hidden group">
                    <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                        <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 "></p>
                    </div>
                    <div className="flex flex-col transition duration-300 delay-150 group-hover:translate-x-[20px]">
                        <div className="bg-transparent w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30"></div>
                        <div className="flex flex-row mb-20 justify-center gap-18 items-center">
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7"/>
                            <div>
                                <p className="text-red-600 line-through w-20 h-5 bg-gray-300 animate-pulse mb-1"></p>
                                <p className="font-bold  w-20 h-5 bg-gray-300 animate-pulse"></p>
                            </div>
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap mx-2">
                <div className="rounded-4xl bg-gray-200/100 aspect-square w-80 flex flex-row text-center overflow-hidden group">
                    <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                        <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 "></p>
                    </div>
                    <div className="flex flex-col transition duration-300 delay-150 group-hover:translate-x-[20px]">
                        <div className="bg-transparent w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30"></div>
                        <div className="flex flex-row mb-20 justify-center gap-18 items-center">
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7"/>
                            <div>
                                <p className="text-red-600 line-through w-20 h-5 bg-gray-300 animate-pulse mb-1"></p>
                                <p className="font-bold  w-20 h-5 bg-gray-300 animate-pulse"></p>
                            </div>
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap mx-2">
                <div className="rounded-4xl bg-gray-200/100 aspect-square w-80 flex flex-row text-center overflow-hidden group">
                    <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                        <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 "></p>
                    </div>
                    <div className="flex flex-col transition duration-300 delay-150 group-hover:translate-x-[20px]">
                        <div className="bg-transparent w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30"></div>
                        <div className="flex flex-row mb-20 justify-center gap-18 items-center">
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7"/>
                            <div>
                                <p className="text-red-600 line-through w-20 h-5 bg-gray-300 animate-pulse mb-1"></p>
                                <p className="font-bold  w-20 h-5 bg-gray-300 animate-pulse"></p>
                            </div>
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap mx-2">
                <div className="rounded-4xl bg-gray-200/100 aspect-square w-80 flex flex-row text-center overflow-hidden group">
                    <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                        <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 "></p>
                    </div>
                    <div className="flex flex-col transition duration-300 delay-150 group-hover:translate-x-[20px]">
                        <div className="bg-transparent w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30"></div>
                        <div className="flex flex-row mb-20 justify-center gap-18 items-center">
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7"/>
                            <div>
                                <p className="text-red-600 line-through w-20 h-5 bg-gray-300 animate-pulse mb-1"></p>
                                <p className="font-bold  w-20 h-5 bg-gray-300 animate-pulse"></p>
                            </div>
                            <div className="text-2xl cursor-pointer bg-gray-300 size-7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Loader;