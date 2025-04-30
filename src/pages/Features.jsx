import running from "../assets/aBlackMan.jfif"
import jodge from "../assets/jodge.jfif"
import runner from "../assets/runner.jfif"
import sh1 from '../assets/bloodLine.png'
import sh2 from "../assets/sh2.png"
import contrast from "../assets/contrast.jfif"
import sport from "../assets/sportWear.jfif"
import Nikes from "../assets/Nikes.jfif"
import leg from "../assets/leg.jfif"
import trophy from "../assets/icons/3dicons-trophy-dynamic-premium.png"
import tablet from "../assets/tablet.png"
import mobile from "../assets/mobile.png"
import sh3 from "../assets/sh3.jfif"
import shield from "../assets/icons/3dicons-shield-front-gradient.png"
import cyber from "../assets/cyber.jfif"
import structure from "../assets/structure.jfif"
import location from "../assets/icons/3dicons-map-pin-front-color.png"
import delivery from "../assets/delivery.jfif"
import { useEffect, useRef } from "react"


const Features = () => {
    const myRef = useRef()

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
            }else if(distance < 100){
                el.style.transform = "scale(0.7)"
                el.style.opacity = "0.7"
            }else if(distance < 70){
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

    useEffect(()=> {
        var i = 0;
        var txt = 'Lorem ipsum typing effect! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id, dicta ipsum nemo cum itaque, quam nihil voluptas'; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        }
        typeWriter()
    }, [])


    return ( 
        <div>

            <div className="fixed top-30 w-screen fadings">
                <p className="text-3xl font-[900] text-center">Walk with confident</p>
                <p className="text-center w-[60%] mx-auto mt-2">Nike is a large and famous company that provide you brand news products</p>
            </div>

            
            <div className="relative mx-auto translate-x-[-10px] mt-70 raisingImg w-max">
                <div className="relative w-20 h-40 mx-auto translate-y-[200px] translate-x-[150px] z-10">
                    <img src={Nikes} className="absolute w-[90%] h-[95%] top-1 left-1 rounded-[10px] z-1" />
                    <img src={mobile} className="absolute top-0 left-0  h-[100%] w-[100%]" />
                </div>
                <div className="relative w-80 h-50 mx-auto">
                    <img src={contrast} className="absolute w-[60%] aspect-[0.625/1] -top-[27%] left-[20%] rotate-90" />
                    <img src={tablet} className="absolute top-0 left-0 h-[100%] w-[100%]" />
                </div>
            </div>

            <div className="bg-[#262323] text-white -translate-y-[30px] py-10 px-5 text-center">
                <div className="w-[80%] mx-auto appearing">
                    <img src={sh1} className="w-30 mx-auto mt-30 mb-5" />
                    <p className="text-3xl font-[900] text-center">Run as fast as you can</p>
                    <p className="text-center mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora a laboriosam reiciendis, ex beatae
                        perspiciatis aspernatur tenetur quas minima modi
                        fugiat odio vel consequatur distinctio illo aliquam,
                        porro optio facilis
                    </p>
                </div>

                <div className="mt-20 flex items-center gap-3 appearing">
                    <img src={sh3} className="rounded-2xl w-[50%]"  />
                    <div className="relative ">
                        <p className="text-start typing text" ref={myRef}></p>
                        {/* <p className="cursor inline-block w-[2px] h-[15px] bg-white"></p> */}
                    </div>
                </div>

                <div className="w-[80%] mx-auto appearing">
                    <img src={shield} className="w-25 mx-auto mt-20 mb-5" />
                    <p className="text-3xl font-[900]">Built-in application security where found means fixed</p>
                    <p className="mt-3">Use AI to find and fix vulnerabilities—freeing your teams to ship more secure software faster.</p>
                    <img src={cyber} className="rounded-2xl mt-10 appearing mx-auto" />
                </div>

                <div className="w-[80%] mx-auto mt-20 appearing">
                    <p className="text-3xl font-[900] ">Get rid of any pain in your leg!</p>
                    <p>because of new layer in our shoes you can walk more comfortable and feel nothing about it</p>
                    <img src={structure} className="rounded-2xl mt-5 mx-auto" />
                </div>

                <div className="w-[80%] mx-auto mt-20 appearing">
                    <img src={location} className="w-25 mx-auto mb-5" />
                    <p className="text-3xl font-[900] ">Fast and accurate delivery</p>
                    <p>because of new layer in our shoes you can walk more comfortable and feel nothing about it</p>
                    <img src={delivery} className="rounded-2xl mt-5 mx-auto" />
                </div>

            </div>


            <div className="mt-20 text-center w-[80%] mx-auto">
                <p className="text-3xl font-[900]">Thousands of sellers and shops around the world</p>
                <p>Find the nearest shop in your town and go there to find your favourite shoes and buy them at a lower price</p>
            </div>

            

        </div>
            
    );
}
 
export default Features;