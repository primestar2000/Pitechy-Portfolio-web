export default function Nav(){
    return(
        <>
        <nav className="flex justify-between p-10" >
            <div className="text-blue-500">Pitechy</div>
            <ul className='hidden md:flex w-[50%] justify-evenly'>
                <li><a href="#home" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">About</a></li>
                <li><a href="#work" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Work</a></li>
                <li><a href="#skills" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Skills</a></li>
                <li><a href="#testimonial" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Testimonial</a></li>
                <li><a href="#contact" className="hover:text-violet-500 font-semibold text-lg text-slate-500 dark:text-white">Contact</a></li>
            </ul>
        </nav>
        </>
        ); 
}




