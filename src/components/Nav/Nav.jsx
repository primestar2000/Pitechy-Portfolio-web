import Logo from "../../assets/images/logo.png"
export default function Nav(){
    return(
        <>
        <nav className="flex justify-between p-5 items-center" >
            <div className="text-blue-500 flex items-center">
                <img src={Logo} className="w-16" alt="" />
                <span className="-m-3 font-bold text-2xl">itechy</span>
            </div>
            <ul className='hidden md:flex w-[50%] justify-evenly'>
                <li><a href="#home" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">About</a></li>
                <li><a href="#work" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Work</a></li>
                <li><a href="#skills" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Skills</a></li>
                <li><a href="#testimonial" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Testimonial</a></li>
                <li><a href="#contact" className="hover:text-violet-500 font-semibold text-sm text-slate-500 dark:text-white">Contact</a></li>
            </ul>
        </nav>
        </>
        ); 
}




