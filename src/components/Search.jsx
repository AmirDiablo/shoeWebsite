import { IoSearchOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";

const Search = ({close}) => {
    return ( 
        <div className="flex items-center justify-between gap-5 px-10 searchbar bg-gray-200">
            <SiNike className="text-7xl"/>
           <div className="relative w-screen">
           <input type="search" className="rounded-2xl bg-white w-[100%] focus:outline-0 py-1 px-2"/>
           <IoSearchOutline className="text-3xl bg-white rounded-full absolute right-0 top-0" />
           </div>
           <p className="text-[18px] font-bold cursor-pointer hover:text-gray-500" onClick={()=> close()}>Cancel</p>
        </div>
    );
}
 
export default Search;