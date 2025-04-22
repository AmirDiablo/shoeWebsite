import { useEffect, useRef } from "react"
import pairOfShoes from "../assets/pairOfShoes.png"
import jordan from "../assets/Jordan.png"
import hoodi from "../assets/hoodi.png"
import Man from "../assets/Man.png"

const Scrolling = () => {
    const myRef = useRef()

    window.addEventListener("scroll", ()=> {
        const elem = document.querySelectorAll(".blocks")
        const triggerBottom = window.innerHeight / 5*4 /* animation starting point */

        elem.forEach(el=> {
            const elemTop = el.getBoundingClientRect().top

            if(elemTop < triggerBottom) {
                el.style.opacity = 1;
                el.style.transform = "scale(1)"
            }else{
                el.style.opacity = 0;
                el.style.transform = "scale(0)"
            }
        })
    })
    
    return ( 
        <div className="scroll mt-[35vh] mx-5 flex flex-col gap-10">

            <div className="blocks w-screen flex flex-row items-start gap-5 lg:mt-40">
                <img src={pairOfShoes} className="drop-shadow ml-10 w-35 md:w-60 md:-translate-y-20 lg:ml-20" />
                <div className="inline-block w-[55px] grow md:-translate-y-20 lg:grow-0 lg:w-[40%]"  ref={myRef}><p className="text-3xl font-bold">Lorem ipsum dolor</p> sit amet, consectetur adipisicing elit. Debitis ratione maiores
                    quasi, optio veniam, dignissimos harum nesciunt est aperiam,
                    voluptatem perferendis voluptas totam neque repellendus iste dolorem
                </div>
                <div className="aspect-square size-90 bg-red-600 rotate-45 absolute -left-66 bottom-0.5 -z-1 md:size-100 lg:size-120"></div>
            </div>

            <div className="blocks w-screen  flex flex-row items-start  gap-5 lg:mt-40">
                <div className="inline-block grow lg:grow-0 lg:w-[40%] lg:ml-110 lg:text-right"  ref={myRef}><p className="text-3xl font-bold">Lorem ipsum dolor</p> sit amet, consectetur adipisicing elit. Debitis ratione maiores
                    quasi, optio veniam, dignissimos harum nesciunt est aperiam,
                    voluptatem perferendis voluptas totam neque repellendus iste dolorem
                </div>
                <img src={hoodi} className="drop-shadow w-35 mr-10 md:w-40 lg:w-60 lg:mr-15" />
                <div className="aspect-square size-90 bg-black rotate-45 absolute -right-66 bottom-0.5 -z-1 md:size-100 lg:size-120"></div>
            </div>
            
            <div className="blocks w-screen flex flex-row items-start gap-5">
                <img src={Man} className="drop-shadow ml-10 w-35 md:w-40 lg:w-60" />
                <div className="inline-block w-[55px] grow lg:grow-0 lg:w-[40%]"  ref={myRef}><p className="text-3xl font-bold">Lorem ipsum dolor</p> sit amet, consectetur adipisicing elit. Debitis ratione maiores
                    quasi, optio veniam, dignissimos harum nesciunt est aperiam,
                    voluptatem perferendis voluptas totam neque repellendus iste dolorem
                </div>
                <div className="aspect-square size-90 bg-blue-600 rotate-45 absolute -left-66 bottom-0.5 -z-1 md:size-100 lg:size-120"></div>
            </div>

        </div>
     );
}
 
export default Scrolling;
/* 
<div className="blocks w-[70vw] mr-20 md:w-[80vw] rounded-2xl columns-2 gap-5 ">
                <div className="inline-block w-[55vw] md:mb-10"  ref={myRef}><p className="text-3xl font-bold">Lorem ipsum dolor</p> sit amet, consectetur adipisicing elit. Debitis ratione maiores
                    quasi, optio veniam, dignissimos harum nesciunt est aperiam,
                    voluptatem perferendis voluptas totam neque repellendus iste dolorem
                </div>
                <img src={hoodi} className="drop-shadow-lg ml-20   md:w-[25vw]" />
            </div> */