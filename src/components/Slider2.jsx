import tennis from "../assets/tennis.jpg"
import basket from "../assets/basket.jpg"
import fit from "../assets/fit.jfif"
import kevin from "../assets/kevin.jfif"
import gang from "../assets/gang.jfif"
import friend from "../assets/friend.jfif"
import girl from "../assets/girl.jfif"

const Slider2 = () => {
    return ( 
        <div className="overflow-visible mt-25 lg:mt-40">
            {/* <div className="item1"><img src={tennis} /></div>
            <div className="item2"><img src={basket} /></div>
            <div className="item3"><img src={fit} /></div>
            <div className="item4"><img src={kevin} /></div> */}
            
            <div className="overflow-x-auto w-[90%] ml-auto mr-auto m-5 flex gap-2 slider2">
               <img src={basket} className="size-80 grayscale lg:size-90" />
               <img src={fit} className="size-80 lg:size-90"/>
               <img src={kevin} className="size-80 grayscale lg:size-90"/>
               <img src={tennis} className="size-80 grayscale lg:size-90"/>
               <img src={gang} className="size-80 grayscale lg:size-90"/>
               <img src={girl} className="size-80 grayscale lg:size-90"/>
               <img src={friend} className="size-80 grayscale lg:size-90"/>
            </div>
            
            
        </div>
     );
}
 
export default Slider2;