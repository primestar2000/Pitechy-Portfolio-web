import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo.png"
import { faBars, faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Nav(){
    const [navigationExpanded, setNavigationExpanded] = useState(false);
    return(
        <>
        <nav className={`${navigationExpanded && 'bg-slate-50 dark:bg-slate-800'} w-full  justify-between flex flex-col md:flex-row p-5  items-center`} >
            <div className="w-full items-center md:w-fit justify-between flex ">
                <div className="text-blue-500 flex items-center">
                    <img src={Logo} className="w-16" alt="" />
                    <span className="-m-3 font-bold text-2xl">itechy</span>
                </div>
                <div className="md:hidden"
                onClick={()=>setNavigationExpanded(!navigationExpanded)}
                >
                    {navigationExpanded ? 
                    <div className="">
                        <FontAwesomeIcon icon={faTimes} />    
                    </div>
                    :
                    <div className="">
                        <FontAwesomeIcon icon={faBars} />
                    </div>}
                </div>
            </div>
            <ul className={`${!navigationExpanded && 'hidden'} md:flex flex-col text-center items-center md:flex-row  w-[50%] justify-evenly`}>
                {/* <li><a  href="#home" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Home</a></li>
                <li><a  href="#about" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">About</a></li> */}
                <li><a  href="#work" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Portfolio</a></li>
                <li><a  href="#skills" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Skills</a></li>
                <li><a  href="#testimonial" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Testimonial</a></li>
                <li><a href="#contact" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Contact</a></li>
            </ul>

        </nav>
        </>
        ); 
}




