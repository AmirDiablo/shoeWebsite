import { Link, useNavigate } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { IoReorderThree } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useBag } from "../contexts/BagContext";
import { useFav } from "../contexts/FavContext";

const Nav = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const { bagCount, setNumber } = useBag()
    const { favCount, setFavNumber } = useFav()

    const close = ()=> {
        setOpen(false)
    }

    const openPage = (page)=> {
        navigate("/"+page)
    }

    //a function for count total number of products and change the context
    const count = (bag)=> {
        const bagCount = (bag ?? []).length

        let totalNumber = 0;
        for(let i=0; i<bagCount ; i++){
            totalNumber = totalNumber + bag[i].number
        }
        
        setNumber(totalNumber)
    }

    const countFav = (fav)=> {
        const favCount = (fav ?? []).length

        let totalNumber = 0;
        for(let i=0; i<favCount ; i++){
            totalNumber = totalNumber + fav[i].number
        }
        
        setFavNumber(totalNumber)
    }

    useEffect(()=> {
        const bag = JSON.parse(localStorage.getItem("bag"))
        count(bag)

        const fav = JSON.parse(localStorage.getItem("fav"))
        countFav(fav)
    },[])

    return ( 
        <div>
            {open ? <div><Search close={close} /></div> : 
                <div className="flex items-center fixed top-0 left-0 w-screen bg-white backdrop-blur-[20px] z-1 md:px-20">
                <p className="text-[30px] font-bold italic p-5">Nike</p>
                <ul className=" font-bold flex gap-5 p-5 overflow-auto nav w-screen justify-end-safe md:gap-15">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><div to="/search" onClick={()=> setOpen(true)} className="flex items-center search cursor-pointer"><IoSearchOutline className="text-2xl" />Search</div></li>
                </ul>
                <button disabled={favCount === 0 ? true : false} onClick={()=> openPage("favourite")}><FaRegHeart className="text-2xl ml-10 cursor-pointer"/></button>
                <button className="flex justify-center items-center" disabled={bagCount === 0 ? true : false} onClick={()=> openPage("bag")}><BsBag className="text-[25px] m-5 cursor-pointer"/><p className="text-[12px] absolute mt-1 -z-1">{bagCount}</p></button>
            </div>
            }
        </div>
        
     );
}
 
export default Nav;