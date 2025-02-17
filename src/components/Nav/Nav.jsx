import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoSmall from "../../assets/images/mainLogo.png"
import Logo from "../../assets/images/horizontalLogo.png"
import { faBars, faCancel, faClose, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import LogoIcon from "../icon/logo";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons/faCalendarXmark";
export default function Nav(){
    const [navigationExpanded, setNavigationExpanded] = useState(false);
    const {darkMode, setDarkMode} = useContext(AppContext);
    return(
        <>
        <nav className={`${navigationExpanded && 'bg-slate-50 dark:bg-slate-800'} h-16 flex justify-center bg-[#ffffff81] dark:bg-slate-800 w-full backdrop-blur-sm lg:justify-between flex-col md:flex-row px-6  items-center`} >
            <div className="w-full  items-center md:w-fit justify-between flex ">
                <div className="text-blue-500 flex items-center">
                    <LogoIcon color={darkMode ? "orange" : "#1b1919"} size={"100"} />
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
            <ul className={` hidden  text-center items-center md:flex  w-[50%] justify-end`}>                
                <li><a  href="#work" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-medium text-sm text-slate-500 dark:text-white">Portfolio</a></li>
                <li><a  href="#skills" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-medium text-sm text-slate-500 dark:text-white">Skills</a></li>
                <li><a  href="#testimonial" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-medium text-sm text-slate-500 dark:text-white">Testimonial</a></li>
                <li><a href="#contact" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-medium text-sm text-slate-500 dark:text-white">Contact</a></li>
            </ul>
            <button className="hidden lg:block" onClick={()=>{ setDarkMode(!darkMode) }}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon } className={'text-3xl' + darkMode ? 'text-amber-500' : 'text-neutral-700'}  />    
            </button>
            {/* side nav */}
            <div className={`absolute ${navigationExpanded ? 'translate-y-[0%]'  : '-translate-y-[100%]' } ease-in-out transition-transform duration-150 top-0  z-20 bg-white dark:bg-slate-800 w-full flex flex-col`}>
                <button onClick={()=>{setNavigationExpanded(false)}} className="w-8 h-8 self-end m-2 border-2 border-solid border-amber-400">
                    <FontAwesomeIcon color="amber" icon={faClose} />
                </button>
                    <a  href="#work" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Portfolio</a>
                    <a  href="#skills" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Skills</a>
                    <a  href="#testimonial" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Testimonial</a>
                    <a href="#contact" onClick={()=>setNavigationExpanded(false)} className="hover:text-amber-400 p-3 font-semibold text-sm text-slate-500 dark:text-white">Contact</a>
            </div>
        </nav>
        </>
        ); 
}




