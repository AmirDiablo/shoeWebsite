import { useRef, useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Raising from "../components/Raising";
import { FaRegHeart } from "react-icons/fa";

const Favourite = () => {
    const myRef = useRef()
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [info, setInfo] = useState()

    useEffect(()=> {
        setItems(JSON.parse(localStorage.getItem("fav")))
    }, [])

    //for checking if each shoe is in the bag list? and return Added or Add to Bag String
    const check = (shoeId)=> {
        const orders = JSON.parse(localStorage.getItem("bag") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        for(let i=0; i<orders.length; i++){
            if(orders[i].id === shoeId){
                isExist = true
            }
        }

        if(isExist){
            return (<p className="flex items-center gap-1"><FaCheckCircle className="text-green-600"/>Added</p>)
        }else{
            return "Add to Bag"
        }
    }

    const openRaising = (shoeId, shoeName, shoePrice, shoeImg, shoeCategory, shoeColor)=> {
        setInfo({id: shoeId, name: shoeName, price: shoePrice, img: shoeImg, category: shoeCategory, color: shoeColor})
        setIsOpen(true)        
    }

    const closeRaising = ()=> {
        setIsOpen(false)
    }

    const unFav = (shoeId)=> {
        for(let i=0; i<items.length ; i++){
            if(items[i].id === shoeId){
                items.splice(i, 1)
            }
        }

        localStorage.setItem('fav', JSON.stringify(items))
        location.reload()
    }



    return ( 
        <div className="mx-5 mt-[12vw] lg:mx-20">
            <div className="text-xl font-[500] mb-5">Favourites</div>
            <div className="flex flex-wrap gap-5 lg:justify-start">
                {items.map((i)=> (
                    <div className="relative w-[40vw] *:mt-10 nth-1:-mt-5 nth-2:-mt-5 lg:w-[30vw]">
                        <div onClick={()=> unFav(i.id)} className="bg-white rounded-full p-2 absolute right-3 top-3 hover:cursor-pointer"><FaHeart className="text-xl" /></div>
                        <img src={"./products/shoes/"+i.img} />
                        <div>
                            <p className="font-[600]">{i.name}</p>
                            <p className="font-[600] text-gray-500/90">{i.category}</p>
                            <p className="text-[18px] font-[500]">Price: {i.price}$</p>
                            <button onClick={()=> openRaising(i.id, i.name, i.price, i.img, i.category, i.color)} className="border-1 border-gray-400 rounded-full py-2 px-7 cursor-pointer mt-5 hover:border-gray-500 font-[500]" >{check(i.id)}</button>
                        </div>
                    </div>
                ))}
            </div>

            {isOpen && <div onClick={closeRaising} onTouchStart={closeRaising} className="bg-black/30 fixed top-0 left-0 right-0 bottom-0"></div>}
            {isOpen && <div><Raising info={info} /></div>}
        </div>
    );
}
 
export default Favourite;