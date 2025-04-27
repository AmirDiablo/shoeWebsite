import { useEffect, useState } from "react";
import Landing from "../components/landing";
import Landing2 from "../components/Landing2";
import Landing3 from "../components/Landing3";
import Scrolling from "../components/Scrolling";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";

const Home = () => {
    
    return ( 
        <div className="overflow-hidden">
            <Landing3 />
            <Scrolling />
            {/* <Slider /> */}
            <Slider2 />
        </div>
     );
}
 
export default Home;