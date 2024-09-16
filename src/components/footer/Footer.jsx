const Footer = () => (
    <>
      <div className="w-full h-[1px] bg-slate-500"></div>
      <footer className="w-full flex flex-col py-10 dark:bg-slate-900 bg-gray-100">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center p-4">
          <p className="text-violet-400 text-lg font-bold mb-4">Quick Links</p>
          <ul className="w-full flex flex-wrap justify-center gap-8 mb-6">
            <li>
              <a href="#work" className="text-sm font-semibold text-slate-500 dark:text-white hover:text-violet-400 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className="text-sm font-semibold text-slate-500 dark:text-white hover:text-violet-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#testimonial" className="text-sm font-semibold text-slate-500 dark:text-white hover:text-violet-400 transition-colors">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-semibold text-slate-500 dark:text-white hover:text-violet-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center">
          <p className="text-xs text-slate-400 dark:text-violet-300 mb-2">
            Designed & Created by <span className="text-slate-600 dark:text-slate-300 font-medium">Stephen Simon</span>
          </p>
          <p className="text-xs text-slate-400 dark:text-violet-300">
            &copy; pitechy {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
  
  export default Footer;
  