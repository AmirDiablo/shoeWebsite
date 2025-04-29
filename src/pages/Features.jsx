import running from "../assets/aBlackMan.jfif"
import jodge from "../assets/jodge.jfif"
import runner from "../assets/runner.jfif"
import sh1 from '../assets/bloodLine.png'
import sh2 from "../assets/sh2.png"
import contrast from "../assets/contrast.jfif"
import sport from "../assets/sportWear.jfif"
import Nikes from "../assets/Nikes.jfif"
import leg from "../assets/leg.jfif"


const Features = () => {

    window.addEventListener("scroll", ()=> {
        const fixedElement = document.querySelectorAll(".fadings")
        const triggerElement = document.querySelector(".raisingImg")
        

        fixedElement.forEach(el=> {
            const triggerPosition = triggerElement.getBoundingClientRect().top
            const fixedPosition = el.getBoundingClientRect().top
            const distance = triggerPosition - fixedPosition
            
            if(distance <= 0) {
                el.style.transform = "scale(0)"
                el.style.opacity = "0"
            }else if(distance < 150){
                el.style.transform = "scale(0.7)"
                el.style.opacity = "0.7"
            }else if(distance < 100){
                el.style.transform = "scale(0.5)"
                el.style.opacity = "0.5"
            }else{
                el.style.transform = "scale(1)"
                el.style.opacity = "1"
            }
        })


    })

    window.addEventListener("scroll", ()=> {
        const appearingElement = document.querySelectorAll('.appearing')
        const triggerBottom = window.innerHeight / 5*4
        
        appearingElement.forEach(el=> {
            const elemTop = el.getBoundingClientRect().top

            if(elemTop < triggerBottom) {
                el.style.transform = "translateY(-20px)"
                el.style.opacity = "1"
            }else{
                el.style.transform = "translateY(20px)"
                el.style.opacity = "0"
            }
        })

    })

    window.addEventListener("scroll", ()=> {
        const appearingElement = document.querySelectorAll('.appearingText')
        const triggerElement = document.querySelector(".moving")
        
        
        appearingElement.forEach(el=> {
            const triggerPosition = triggerElement.getBoundingClientRect().bottom
            const appearingPosition = el.getBoundingClientRect().top
            
            if(triggerPosition >= appearingPosition) {
                el.style.transform = "translateY(-20px)"
                el.style.opacity = "1"
            }else{
                el.style.transform = "translateY(20px)"
                el.style.opacity = "0"
            }
        })

    })

    return ( 
        <div className="">
            <div className="flex justify-center">                                                     
                <p className="w-[80%] text-2xl font-[800] text-center top-55 fixed fadingText fadings">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="font-[400] w-[60%] text-center fixed top-71 fadingText fadings">Repellat eum quidem sequi facilis cupiditate explicabo iure!</p>
            </div>

            {/* <div className="w-screen flex items-center justify-center fixed top-60 fadings fadingText -z-1">
                <img src={sh2} className="w-30 -mb-20 floatingShoes drop-shadow-2xl"  />
                <img src={sh1} className="w-20 -rotate-35 floatingShoes drop-shadow-2xl"  /> 
            </div> */}

            <div className="bg-black">

                <div className="bg-white p-5 w-[80%] mx-auto rounded-b-2xl drop-shadow-2xl backdrop-blur-[20px] mt-100 mb-20 raisingImg"></div>
                <img src={sh1} className="w-30 mx-auto mb-2" />
                <div className="text-white text-center w-[80%] mx-auto mb-10">
                    <p className="text-2xl font-[700] mb-2">Accelerate performance</p>
                    With GitHub Copilot embedded throughout the platform, you can simplify your toolchain, automate tasks, and improve the developer experience.
                </div>

                <div className="flex items-center gap-2 appearing">
                    <div className="bg-gray-200/40 rounded-2xl w-[70%] m-5">
                         <img src={contrast} className="rounded-2xl mx-auto shining" />
                    </div>
                    <div className="text-white">
                        <p className="text-2xl font-[700] mb-2">Luxury desing and unique Look</p>
                        <p className="font-[500]">Shine among your friends and coworkers</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-20 appearing">
                    <div className="text-white">
                        <p className="text-2xl font-[700] mb-2">Luxury desing and unique Look</p>
                        <p className="font-[500]">Shine among your friends and coworkers</p>
                    </div>
                    <div className="bg-gray-200/40 rounded-2xl w-[60%] m-5 sticky">
                         <img src={Nikes} className="rounded-2xl mx-auto shining" />
                    </div>
                </div>
                
            </div>

            <div className="bg-black grid grid-cols-2 pt-20 pb-20 items-center ">
                <div className="rounded-2xl col-start-1 col-end-2 m-5 sticky top-100 appearing moving shining">
                    <img src={leg} className="rounded-2xl"/>
                </div>

                <div className="col-start-2 col-end-3 text-white appearing">
                    <p className="text-2xl font-[700] mb-2">Luxury desing and unique Look</p>
                    <p className="font-[500] text-[13px]">Shine among your friends and coworkers. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Dignissimos illo vitae dolorum optio laudantium
                    </p>
                </div>

                <div className="text-white col-start-2 mt-40 appearingText mb-20">
                    <p className="text-2xl font-[700] mb-2">Run as fast as you can</p>
                    <p className="font-[500] text-[13px]">defeat any competetion on your way. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Dignissimos illo vitae dolorum optio laudantium
                    </p>
                </div>

                <div className="text-white col-start-2 mt-40 mb-[20vw] appearingText">
                    <p className="text-2xl font-[700] mb-2">Run as fast as you can</p>
                    <p className="font-[500] text-[13px]">defeat any competetion on your way. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Dignissimos illo vitae dolorum optio laudantium
                    </p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Features;