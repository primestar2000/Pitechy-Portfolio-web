import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoSmall from "../../assets/images/mainLogo.png"
import Logo from "../../assets/images/horizontalLogo.png"
import { faBars, faCross, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import LogoIcon from "../icon/logo";
export default function Nav(){
    const [navigationExpanded, setNavigationExpanded] = useState(false);
    const {darkMode, setDarkMode} = useContext(AppContext);
    return(
        <>
        <nav className={`${navigationExpanded && 'bg-slate-50 dark:bg-slate-800'} h-16 flex justify-center bg-[#ffffff81] dark:bg-slate-800 w-full backdrop-blur-sm lg:justify-between flex-col md:flex-row px-6  items-center`} >
            <div className="w-full  items-center md:w-fit justify-between flex ">
                <div className="text-blue-500 flex items-center">
                    <LogoIcon color={darkMode ? "orange" : "#1b1919"} size={"100"} />
                    {/* <img src={Logo} className="h-10 hidden lg:block" alt="" />
                    <img src={LogoSmall} className="h-10 lg:hidden" alt="" /> */}
                    {/* <span className="hidden lg:inline font-bold text-2xl">P
                        itechy</span> */}
                </div>
            <button className="block lg:hidden" onClick={()=>{ setDarkMode(!darkMode) }}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon } className={'text-3xl' + darkMode ? 'text-amber-500' : 'text-neutral-700'}  />    
            </button>
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
            <ul className={`${!navigationExpanded && 'hidden'} md:flex flex-col text-center items-center md:flex-row  w-[50%] justify-end`}>
                {/* <li><a  href="#home" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Home</a></li>
                <li><a  href="#about" onClick={()=>setNavigationExpanded(false)} className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">About</a></li> */}
                <li><a  href="#work" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Portfolio</a></li>
                <li><a  href="#skills" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Skills</a></li>
                <li><a  href="#testimonial" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Testimonial</a></li>
                <li><a href="#contact" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Contact</a></li>
            </ul>
            <button className="hidden lg:block" onClick={()=>{ setDarkMode(!darkMode) }}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon } className={'text-3xl' + darkMode ? 'text-amber-500' : 'text-neutral-700'}  />    
            </button>
        </nav>
        </>
        ); 
}




