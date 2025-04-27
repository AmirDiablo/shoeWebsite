import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

import { useBag } from "../contexts/BagContext";
import { useFav } from "../contexts/FavContext";

const Bag = () => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const { addBagCount, reduce } = useBag()
    const { addFavCount } = useFav()

    useEffect(()=> {
        setItems(JSON.parse(localStorage.getItem("bag")) || null)
    }, [])

    useEffect(()=> {
        let totalPrice = 0;
        
        for(let i=0; i<items.length ; i++){
            totalPrice = totalPrice + (items[i].price * items[i].number)
        }
        setTotal(totalPrice)
        
    }, [items])

    const deleteFromBag = (shoeId, shoeSize)=> {
        for(let i=0; i<items.length ; i++){
            if(items[i].id === shoeId && items[i].size === shoeSize){
                items.splice(i, 1)
                reduce()
            }
        }

        localStorage.setItem('bag', JSON.stringify(items))
        /* location.reload() */
    }

    const addNumber = (shoeId, shoeSize)=> {
        for(let i=0; i<items.length; i++){
            if(items[i].id === shoeId && items[i].size === shoeSize){
                items[i].number += 1
                addBagCount()
            }
        }

        localStorage.setItem('bag', JSON.stringify(items))
        /* location.reload() */
    }
    
    const countItems = ()=> {
        let totalNumber = 0;
        for(let i=0; i<items.length ; i++){
            totalNumber = totalNumber + items[i].number
        }
        
        return totalNumber
    }

    const reduceNumber = (shoeId, shoeSize)=> {
        for(let i=0; i<items.length ; i++){
            if(items[i].id === shoeId && items[i].size === shoeSize){
                items[i].number -= 1
                reduce()
            }
        }

        localStorage.setItem('bag', JSON.stringify(items))
        /* location.reload() */
    }

    const addToFav = (shoeId, shoeName, shoeImg, shoePrice, shoeColor, shoeCategory)=> {
        const fav = JSON.parse(localStorage.getItem("fav") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        for(let i=0; i<fav.length; i++){
            if(fav[i].id === shoeId && fav[i].category === shoeCategory){
                isExist = true
            }
        }

        if(isExist){
            return
        }
        
        const item = {name: shoeName, price: shoePrice, img: shoeImg, category: shoeCategory, color: shoeColor, id: shoeId, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
        fav.push(item)
        localStorage.setItem("fav", JSON.stringify(fav))
        addFavCount()
    }
    
    return ( 
        <div className="lg:grid lg:grid-cols-3">

            <div className="lg:col-start-1 lg:col-end-3">
                <div className="flex flex-col items-center m-10 mt-[11vw] lg:items-start">
                    <p className="text-3xl font-[500]">Bag</p>
                    <div className="flex gap-2 lg:hidden">
                        <p className="text-gray-500/90">{countItems()} items</p> |
                        <p className="text-[18px]">{total}$</p>
                    </div>
                </div>

                <hr className="text-gray-200 lg:hidden" />

                <div>
                    {items.map((i)=> (
                        <div>
                            <div className="flex gap-3 m-5 my-10">
                                <div>
                                    <img className="w-[154px] max-w-[154px]" src={"./products/shoes/"+i.img} />
                                    <div className="flex items-center justify-between">
                                        <div className="relative flex items-center gap-7 border-1 rounded-3xl w-max p-2 border-gray-300 mt-3">
                                            <div className="hover:bg-gray-300 p-3 absolute left-0 rounded-full cursor-pointer">{i.number === 1 ? <GoTrash onClick={()=> deleteFromBag(i.id, i.size)}/>  : <FiMinus onClick={()=> reduceNumber(i.id, i.size)}/>}</div>
                                            <p className="ml-10 mr-10">{i.number}</p>
                                            <div className="hover:bg-gray-300 p-3 absolute right-0 rounded-full cursor-pointer"><LuPlus onClick={()=> addNumber(i.id, i.size)}/></div>
                                        </div>
                                        <div onClick={()=> addToFav(i.id, i.name, i.img, i.price, i.color, i.category)} className="border-1 border-gray-300 p-2 w-max rounded-full mt-3 cursor-pointer hover:bg-gray-300"><FaRegHeart /></div>
                                    </div>
                                </div>
                                <div className="w-screen">
                                    <p className="text-xl font-[500] md:float-right">price: {i.price}$</p>
                                    <p className="text-xl font-[500]">{i.name}</p>
                                    <p className="text-xl text-gray-500">{i.category}</p>
                                    <p className="text-xl text-gray-500">Size: {i.size}</p>
                                </div>
                            </div>

                            <hr className="text-gray-300/90" />
                        </div>
                    ))}
                </div>
            </div>
 
            <div className="p-5 lg:col-start-3 lg:mt-45">
                <p className="text-3xl font-[500] mb-5">Summary</p>
                <div className="flex items-center justify-between">
                   <p className="text-[18px] font-[400]">Subtotal</p> 
                   <div>{total} $</div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-[400]">Estimamted Delivery & Handling</p>
                    <div>18 790.00 $</div>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-[18px] font-[600]">Total</p>
                    <div>18 790.00 $</div>
                </div>
                <div className="text-center bg-black text-white rounded-4xl p-5 mt-10">Member Checkout</div>
            </div>

        </div>
    );
}
 
export default Bag;