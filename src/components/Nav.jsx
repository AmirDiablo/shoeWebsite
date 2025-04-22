import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { IoReorderThree } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Nav = () => {
    return ( 
        <div className="flex items-center fixed top-0 left-0 w-screen bg-white/30 backdrop-blur-[20px] z-1 md:px-20">
            <p className="text-[30px] font-bold italic p-5">Nike</p>
            <ul className=" font-bold flex gap-5 p-5 overflow-auto nav w-screen justify-end-safe md:gap-15">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/search" className="flex items-center"><IoSearchOutline className="text-2xl" />Search</Link></li>
            </ul>
            <p><GiShoppingBag className="text-[25px] m-5"></GiShoppingBag></p>
        </div>
     );
}
 
export default Nav;