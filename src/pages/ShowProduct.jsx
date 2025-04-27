import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useFav } from '../contexts/FavContext';
import { useBag } from '../contexts/BagContext';

const ShowProduct = () => {
    const { state } = useLocation()
    const {name, id, img, price, category, color} = state.info
    const [imgSrc, setImgSrc] = useState(img)   /*for changing the src of img with starting value*/
    const [shoes, setShoes] = useState([        //like we fetch these shoes from db (all of the shoes with same name)
        {id:1, img: "anotherColor.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "black/blue"},
        {id:7, img: "jordan-cmft-era-shoes-Q6k4Bx.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "red/white"},
        {id:19, img: "JORDAN+CMFT+ERA.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "black"},
        {id:20, img: "JORDAN+CMFT+ERAanotherColor.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "white"},
    ])
    const [newId, setNewId] = useState(id)
    const [newColor, setNewColor] = useState(color)
    const [size, setSize] = useState()
    const { addBagCount } = useBag()
    const { addFavCount } = useFav()

    const changeShoe = (shoeImg, shoeId, shoeColor)=> {
        setImgSrc(shoeImg)
        setNewId(shoeId)
        setNewColor(shoeColor)
    }

    const selectSize = (size)=> {
        setSize(size)
    }

    const addToBag = ()=> {
        const orders = JSON.parse(localStorage.getItem("bag") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        let index;
        for(let i=0; i<orders.length; i++){
            if(orders[i].id === id && orders[i].size === size){
                isExist = true
                index = i
            }
        }

        if(isExist){
            orders[index].number += 1
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
        }else{
            const item = {name: name, price: price, img: img, category: category, size, color: color, id: id, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
            orders.push(item)
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
            /* location.reload() */
        }
    }

    const addToFav = ()=> {
        const fav = JSON.parse(localStorage.getItem("fav") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        for(let i=0; i<fav.length; i++){
            if(fav[i].id === id && fav[i].category === category){
                isExist = true
            }
        }

        if(isExist){
            return
        }
        
        const item = {name, price, img: imgSrc, category, color: newColor, id: newId, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
        fav.push(item)
        localStorage.setItem("fav", JSON.stringify(fav))
        addFavCount()
    }

    return ( 
        <div className='flex flex-col overflow-x-visible mt-[10vw] lg:grid lg:grid-cols-2 lg:gap-1 lg:grid-rows-1 lg:mx-20 '>

            <div className='p-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:h-max'>
                <p className='text-[20px] font-bold'>{name}</p>
                <p className='text-gray-500 text-[17px]'>{category}</p>
                <p className='font-[700]'>{price}$</p>
            </div>

            <div className='lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-6'>
                <img src={"./products/shoes/"+imgSrc} className='w-screen lg:rounded-2xl shoe lg:sticky top-0' />
            </div>

            <div className='flex gap-1 overflow-x-auto mx-auto lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:h-max'>
                {shoes.map((item)=> (
                    <img src={"./products/shoes/"+item.img} onClick={()=> changeShoe(item.img, item.id, item.color)} className={imgSrc === item.img ? 'outline-1 size-40 rounded-sm m-2 cursor-pointer hover:outline-1' : "size-40 rounded-sm m-2 cursor-pointer hover:outline-1"} />
                ))}
            </div>

            <div className='mt-8 lg:col-start-2 lg:col-end-3 lg:row-star-3 lg:row-end-4'>
                <p className='text-[18px] font-bold mb-4 ml-17'>Select Size</p>
                <div className='flex flex-wrap gap-1 sizes mx-1 justify-center'>
                    <p data-size={"UK 6 (EU 40)"} onClick={(e)=> selectSize(e.target.getAttribute("data-size"))}>UK 6 (EU 40)</p>
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

            <div className='w-[90%] mx-auto'>
                <div onClick={addToBag} className='bg-black cursor-pointer text-white p-5 text-center font-[700] rounded-4xl mt-10 mb-3'>Add to bag</div>
                <div onClick={addToFav} className='border-1 border-gray-400 cursor-pointer rounded-4xl p-5 text-center font-[700] flex items-center justify-center gap-2 hover:border-black'>Favourite <FaRegHeart className='text-2xl'/></div>
            </div>

            <div className='p-5 m-5 font-[500]'> 
                Good lookin' shoes you can wear all day?
                It's got to be the Jordan CMFT Era.
                With style that comes straight from the greats
                (we're talking about the AJ1 and AJ6, of course),
                these kicks easily take you from morning to night.
                Plus, breathable materials up top and soft foam underfoot
                help these sneakers live up to their name.
            </div>

        </div>
    );
}
 
export default ShowProduct;