import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import LogoIcon from "../icon/logo";

export default function Nav() {
    const [navigationExpanded, setNavigationExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { darkMode, setDarkMode } = useContext(AppContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#work", label: "Portfolio" },
        { href: "#skills", label: "Skills" },
        { href: "#testimonial", label: "Testimonial" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 h-16 flex justify-center transition-all duration-300 ${scrolled
                        ? 'bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-md'
                        : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm'
                    } lg:justify-between flex-col md:flex-row px-6 items-center`}
            >
                <div className="w-full items-center md:w-fit justify-between flex">
                    <motion.div
                        className="text-blue-500 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LogoIcon color={darkMode ? "orange" : "#1b1919"} size={"100"} />
                    </motion.div>

                    <motion.button
                        className="block lg:hidden"
                        onClick={() => setDarkMode(!darkMode)}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FontAwesomeIcon
                            icon={darkMode ? faSun : faMoon}
                            className={`text-2xl ${darkMode ? 'text-amber-400' : 'text-slate-700'}`}
                        />
                    </motion.button>

                    <motion.div
                        className="md:hidden cursor-pointer"
                        onClick={() => setNavigationExpanded(!navigationExpanded)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FontAwesomeIcon
                            icon={navigationExpanded ? faTimes : faBars}
                            className="text-xl text-slate-700 dark:text-white"
                        />
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden text-center items-center md:flex gap-2">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={link.href}
                                className="relative px-4 py-2 font-medium text-sm text-slate-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    className="hidden lg:block"
                    onClick={() => setDarkMode(!darkMode)}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <FontAwesomeIcon
                        icon={darkMode ? faSun : faMoon}
                        className={`text-2xl ${darkMode ? 'text-amber-400' : 'text-slate-700'}`}
                    />
                </motion.button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {navigationExpanded && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-slate-800 shadow-2xl z-50 flex flex-col p-6"
                        >
                            <motion.button
                                onClick={() => setNavigationExpanded(false)}
                                className="self-end mb-8 w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 hover:bg-amber-500 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FontAwesomeIcon icon={faClose} className="text-white" />
                            </motion.button>

                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setNavigationExpanded(false)}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="py-4 px-4 font-semibold text-lg text-slate-600 dark:text-white hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-slate-700 rounded-lg transition-all"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Overlay */}
                <AnimatePresence>
                    {navigationExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setNavigationExpanded(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />
                    )}
                </AnimatePresence>
            </motion.nav>
            {/* Spacer to prevent content from going under fixed nav */}
            <div className="h-16"></div>
        </>
    );
}




