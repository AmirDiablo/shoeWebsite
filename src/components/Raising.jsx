import { useState } from "react";
import { useBag } from "../contexts/BagContext";

const Raising = ({info}) => {
    const [size, setSize] = useState()
    const { addBagCount, reduce } = useBag()

    const selectSize = (size)=> {
        setSize(size)
    }

    const addToBag = ()=> {
        const orders = JSON.parse(localStorage.getItem("bag") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        let index;
        for(let i=0; i<orders.length; i++){
            if(orders[i].id === info.id && orders[i].size === size){
                isExist = true
                index = i
            }
        }

        if(isExist){
            orders[index].number += 1
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
        }else{
            const item = {name: info.name, price: info.price, img: info.img, category: info.category, size, color: info.color, id: info.id, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
            orders.push(item)
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
            /* location.reload() */
        }
    }

    return ( 
        <div className="raising bg-white rounded-t-2xl p-5 fixed bottom-0 left-0 right-0 flex flex-col  ">
            <div className="flex gap-3">
                <img src={"./products/shoes/"+info.img} className="w-40" />
                <div>
                    <p className="font-[500] text-[18px]">{info.category}</p>
                    <p className="text-2xl font-[500]">{info.name}</p>
                    <p className="font-[500] text-[18px]">Price: {info.price}$</p>
                </div>
            </div>
            
            <div className="mt-7">
                <p className="text-[18px] font-[500]">Select Size</p>
                <div className='flex items-baseline mt-2 flex-row gap-3 mx-1 overflow-auto no-scrollbar [&>p]:border-1 [&>p]:border-gray-400/50 [&>p]:hover:border-gray-600 [&>p]:rounded-xl [&>p]:p-3 [&>p]:min-w-30 [&>p]:text-center [&>p]:cursor-pointer '>
                    <p data-size={"UK 6 (EU 40)"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 6</p>
                    <p data-size={"UK 6.5"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 6.5</p>
                    <p data-size={"UK 7"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 7</p>
                    <p data-size={"UK 7.5"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 7.5</p>
                    <p data-size={"UK 8"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 8</p>
                    <p data-size={"UK 8.5"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 8.5</p>
                    <p data-size={"UK 9"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 9</p>
                    <p data-size={"UK 9.5"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 9.5</p>
                    <p data-size={"UK 10"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 10</p>
                    <p data-size={"UK 10.5"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 10.5</p>
                    <p data-size={"UK 11"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 11</p>
                    <p data-size={"UK 12"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 12</p>
                </div>
            </div>
 
            <button onClick={addToBag} className="bg-black text-white font-[500] text-[18px] py-3 w-[90%] self-center rounded-full mt-7 hover:cursor-pointer">Add to Bag</button>

        </div>
    );
}
 
export default Raising;