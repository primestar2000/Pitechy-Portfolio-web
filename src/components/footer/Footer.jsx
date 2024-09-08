const Footer = () => (
    <>
        <div className="w-full h-[1px] bg-slate-500"></div>
        <div className="w-full flex flex-col py-10 dark:bg-slate-900">
            <div className="w-full flex-col p-2 flex items-center">
                <p className="text-violet-400 text-center font-bold">Quick links</p>
                <ul className="w-full max-w-[700px] p-4 flex justify-between">
                    <li><a  href="#work" className=" p-3 font-semibold text-xs text-slate-500 dark:text-white">Portfolio</a></li>
                    <li><a  href="#skills"  className=" p-3 font-semibold text-xs text-slate-500 dark:text-white">Skills</a></li>
                    <li><a  href="#testimonial"  className=" p-3 font-semibold text-xs text-slate-500 dark:text-white">Testimonial</a></li>
                    <li><a href="#contact"  className=" p-3 font-semibold text-xs text-slate-500 dark:text-white">Contact</a></li>
                </ul>
            </div>
            <p className=" w-full text-violet-300 text-center text-xs">Designed & Created by <span className="text-slate-300">Stephen simon</span> </p>
            <p className="w-full text-violet-300 text-center text-xs">&copy;  pitechy 2023 - current year. All rights</p>
        </div>

    </>
)
export default Footer;
