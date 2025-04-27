import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { SiNike } from "react-icons/si";

const Footer = () => {

    /* bg-linear-to-t from-black from-40% to-white/1 */
    return ( 
        <div className="bg-gray-950 mt-20 py-20 cursor-pointer">
            <div className=" mt-10">
                <details className="text-white detail1" onClick={()=> {
                    const check = document.querySelector(".detail1").hasAttribute("open")
                    const arrow = document.querySelector(".arrow")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Resources</p>
                        <IoIosArrowDown className="arrow"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Find A Store</Link>
                        <Link>Become A Member</Link>
                        <Link>Running Shoe Finder</Link>
                        <Link>Product Advice</Link>
                        <Link>Send Us Feedback</Link>
                    </div>
                </details>

                <details className="text-white detail2" onClick={()=> {
                    const check = document.querySelector(".detail2").hasAttribute("open")
                    const arrow = document.querySelector(".arrow2")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Help</p>
                        <IoIosArrowDown className="arrow2"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Get Help</Link>
                        <Link>Order Status</Link>
                        <Link>Delivery</Link>
                        <Link>Returns</Link>
                        <Link>Payment Options</Link>
                        <Link>Contact Us On Nike.com Inquiries</Link>
                    </div>
                </details>

                <details className="text-white detail3" onClick={()=> {
                    const check = document.querySelector(".detail3").hasAttribute("open")
                    const arrow = document.querySelector(".arrow3")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Company</p>
                        <IoIosArrowDown className="arrow3"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>About Nike</Link>
                        <Link>News</Link>
                        <Link>Careers</Link>
                        <Link>Investors</Link>
                        <Link>Sustainability</Link>
                        <Link>Report a Concern</Link>
                    </div>
                </details>
            </div>
            <div className="text-gray-400 p-4 flex flex-col gap-4">
                <div className="flex items-center gap-1">
                    <FaRegCopyright /> 2025 Nike, Inc. All rights reserved
                </div>
                <div className="flex flex-col gap-2">
                    <Link>Terms of Sale</Link>
                    <Link>Trems of Use</Link>
                    <Link>Nike Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;