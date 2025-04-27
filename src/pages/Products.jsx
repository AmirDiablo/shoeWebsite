import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useFav } from "../contexts/FavContext";

const Products = () => {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const { addFavCount } = useFav()

    /* all shoes with same name and diffrent color should be seperate and has a unique id becaue when a user try to select a shoe
    we can not understand which color user want! so we make them seperratly and by using a query we gather all of the shoes with sam
    name in showProduct page */
    const productsList = [  
        {id:1, img: "anotherColor.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "black/blue"},
        {id:2, img: "air-jordan-4-retro-abundance-shoes-AvPVnR8r.jpg", category: "Younger kid's shoes" , price: 50, prevPrice: 990.00, name: "Air Jordan4 retro", color: "light green/white"},
        {id:3, img: "AIR+FORCE+1+_2707.jpg", category: "Olders Kid's shoes" , price: 12, prevPrice: 990.00, name: "NOCTA Air Force1", color: "black"},
        {id:4, img: "AIR+FORCE+1+_2707+LV8.jpg", category: "Men's Shoes" , price: 32, prevPrice: 990.00, name: "Nike Air Force 1 '07 LV8", color: "blue/white/brown"},
        {id:5, img: "AIR+MAX+PLUS+ECLAIR+LIGHTENING.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Nike Air Max Plus 'Eclair Lightning'", color: "blue/white/red"},
        {id:6, img: "custom-nike-blazer-low-shoes-by-you.jpg", category: "Men's Shoes" , price: 7, prevPrice: 990.00, name: "Nike Blazer Low '77 Vintage", color: "red/white"},
        {id:7, img: "jordan-cmft-era-shoes-Q6k4Bx.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "red/white"},
        {id:8, img: "JORDAN+LUKA+4+PF.jpg", category: "Older Kids' Basketball Shoes", price: 17, prevPrice: 990.00, name: "Luka 4 PF 'Bloodline'", color: "black/red/white"},
        {id:10, img: "luka-4-pf-space-navigator-basketball-shoes-kQvxZx.jpg", category: "Basketball Shoes" , price: 15, prevPrice: 990.00, name: "Luka 4 PF 'Space Navigator'", color: "light green/black/white"},
        {id:11, img: "luka-77-pf-basketball-shoes-MlPLwJ.jpg", category: "Basketball Shoes" , price: 23, prevPrice: 990.00, name: "Luka .77 PF", color: "black/white/pink"},
        {id:12, img: "M+NIKE+COURT+LITE+4+CLY.jpg", category: "Women's Tennis Shoes" , price: 17, prevPrice: 990.00, name: "NikeCourt Lite 4", color: "black/white"},
        {id:13, img: "NIKE+AIR+ZOOM+STRUCTURE+24.jpg", category: "Men's Running Shoes" , price: 14, prevPrice: 990.00, name: "Nike Air Zoom Structure 24", color: "white"},
        {id:14, img: "NIKE+C1TY.jpg", category: "Shoes" , price: 19, name: "Nike C1TY", color: "black"},
        {id:15, img: "NIKE+FIELD+GENERAL.jpg", category: "Men's Shoes" , price: 20, prevPrice: 990.00, name: "Nike Field General", color: "cream"},
        {id:16, img: "NIKE+REVOLUTION+7+WIDE.jpg", category: "Men's Road Running Shoes (Extra Wide)" , price: 5, prevPrice: 990.00, name: "Nike Revolution 7", color: "black"},
        {id:17, img: "NIKE+SB+DUNK+LOW+PRO.jpg", category: "Skate Shoes" , price: 18, prevPrice: 990.00, name: "Nike SB Dunk Low Pro", color: "yellow"},
        {id:18, img: "NIKE+ZOOM+VOMERO+5.jpg", category: "women's shoes" , price: 16, prevPrice: 990.00, name: "Nike Zoom Vomero 5", color: "black/gray"},
        {id:19, img: "JORDAN+CMFT+ERA.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "black"},
        {id:20, img: "JORDAN+CMFT+ERAanotherColor.jpg", category: "Men's Shoes" , price: 10, prevPrice: 990.00, name: "Jordan CMFT Era", color: "white"},
    ]

    const open = (info)=> {
        navigate("/showProduct", {state: {info: info}})
    }

    const handleScroll = () => {
        if (
          document.body.scrollHeight - 300 <window.scrollY + window.innerHeight
        ) {
          setLoading(true);
        }
      };

    window.addEventListener("scroll", handleScroll);

    useEffect(() => {
        if (loading == true) {
          setPage((prevPage) => prevPage + 1);
        }
      }, [loading]);

    const fetchNewLoad = ()=> {
        const numberOfItems = 4
        
    }

    useEffect(()=> {
        /* fetch from server */
        fetchNewLoad()
    }, [page])

    const addToFav = (e, shoeId, shoeName, shoeImg, shoePrice, shoeCategory, shoeColor)=> {
        e.stopPropagation()
       
        const fav = JSON.parse(localStorage.getItem("fav") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        for(let i=0; i<fav.length; i++){
            if(fav[i].id === shoeId){
                isExist = true
            }
        }

        if(isExist){
            return
        }

        const item = {name: shoeName, price: shoePrice, img: shoeImg, category: shoeCategory, id: shoeId, number: 1, color: shoeColor} //maybe i should contain the color of this shoe as an string like "white/black"
        fav.push(item)
        localStorage.setItem('fav', JSON.stringify(fav))
        addFavCount()
    }
    
    return ( 
        <div className=" md:mt-[10vw]">
            <div className="flex gap-5 flex-col justify-center items-center lg:flex-row md:flex-row flex-wrap mx-2">
            {productsList.map((item)=> (
                <div key={item.id} onClick={()=> open({name: item.name, id: item.id, img: item.img, price: item.price, prevPrice: item.prevPrice, category: item.category, color: item.color})} className="rounded-4xl bg-gray-200/40 aspect-square w-80 flex flex-row text-center overflow-hidden group cursor-pointer">
                <div className="w-10 -ml-10 bg-black text-white text-center  mr-7 transition delay-150 duration-300 ease-in-out group-hover:translate-x-10 ">
                    <p className="-rotate-90 text-center translate-y-[60px] translate-x-[10px] h-50 w-50 ">{item.name}</p>
                </div>
                <div className="flex flex-col transition duration-300 delay-150 group-hover:translate-x-[20px]">
                    <img src={"./products/shoes/"+item.img} className="bg-transparent w-65 p-10 m-auto items-center -scale-x-100 transition duration-300 delay-150 group-hover:rotate-30" />
                    <div className="flex flex-row mb-20 justify-center gap-18 items-center">
                        <FaRegHeart onClick={(e)=> addToFav(e, item.id, item.name, item.img, item.price, item.category, item.color)} className="text-2xl cursor-pointer "/>
                        <div>
                            <p className="text-red-600 line-through">$990.00</p>
                            <p className="font-bold">$749.00</p>
                        </div>
                        <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
 
export default Products;