import tennis from "../assets/tennis.jpg"
import basket from "../assets/basket.jpg"
import fit from "../assets/fit.jfif"
import kevin from "../assets/kevin.jfif"
import { useRef } from "react"

const Slider = () => {
    const myRef = useRef()
    const myRef2 = useRef()
    const myRef3 = useRef()
    const myRef4 = useRef()

    const open = (ref)=> {
       if(ref === "myRef"){
        myRef.current.style.width = "160px";
       }else{
        myRef.current.style.width = "30%";
       }

       if(ref === "myRef2"){
        myRef2.current.style.width = "160px";
       }else{
        myRef2.current.style.width = "30%";
       }

       if(ref === "myRef3"){
        myRef3.current.style.width = "160px";
       }else{
        myRef3.current.style.width = "30%";
       }

       if(ref === "myRef4"){
        myRef4.current.style.width = "160px"
       }else{
        myRef4.current.style.width = "30%"
       }
    }

    return ( 
        <div className="slider mt-20 flex justify-center items-center gap-1 ml-auto mr-auto size-60 mb-50 md:scale-130 md:mt-50 lg:scale-200 lg:mt-100">
            <img src={tennis} ref={myRef} onClick={()=> open("myRef")} className="slide"/>
            <img src={basket} ref={myRef2} onClick={()=> open("myRef2")} className="slide"/>
            <img src={fit} ref={myRef3} onClick={()=> open("myRef3")} className="slide"/>
            <img src={kevin} ref={myRef4} onClick={()=> open("myRef4")} className="slide"/>
        </div>
     );
}
 
export default Slider;