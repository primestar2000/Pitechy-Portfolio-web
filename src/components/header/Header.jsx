import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import myImage from "../../assets/images/me.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import Resume from "../../assets/NEW-RESUME.pdf";
import SocialMediaSection from "./SocialMediaSection";

const Header = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <header className="mx-auto bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-800 dark:to-gray-900 dark:text-white relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <Nav />

            <div className="w-full max-w-[1920px] mx-auto min-h-[700px] flex flex-col justify-center">
                <div className="h-full flex flex-col-reverse lg:flex-row items-center lg:justify-between p-10 gap-10 w-full">
                    {/* Hero Section Write-up */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[55px] font-extrabold text-white dark:text-gray-100"
                        >
                            I&apos;m <span className="text-yellow-400">Stephen</span>{" "}
                            <span className="text-yellow-400">Simon</span>
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-xl lg:text-2xl text-gray-200 my-3 dark:text-gray-300"
                        >
                            <span className="font-semibold">
                                <Typewriter
                                    words={[
                                        'FullStack Dev',
                                        'Web Developer',
                                        'Mobile App Dev',
                                        'React.js Dev',
                                        'React Native Dev',
                                        'Laravel',
                                        'Vanilla JS',
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-sm lg:text-[16px] 2xl:text-[24px] leading-normal text-center md:text-left text-gray-300 dark:text-gray-400 mx-auto lg:mx-0"
                        >
                            Welcome to my Code Haven! I&apos;m{" "}
                            <span className="text-yellow-400">Stephen Simon</span>, a passionate
                            software developer skilled in crafting elegant, user-friendly solutions
                            for diverse challenges in the dynamic world of coding.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-6 my-6 justify-center lg:justify-start"
                        >
                            <SocialMediaSection />
                        </motion.div>

                        <motion.a
                            variants={itemVariants}
                            href={Resume}
                            download="stephen_resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className="bg-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg transition-all hover:bg-transparent hover:border-yellow-400 hover:border-2 hover:text-yellow-400 shadow-lg hover:shadow-xl">
                                Get Resume
                                <FontAwesomeIcon icon={faDownload} className="ml-2" />
                            </button>
                        </motion.a>
                    </motion.div>

                    {/* Hero Section Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] dark:shadow-yellow-400 bg-gray-100 rounded-full overflow-hidden shadow-2xl"
                    >
                        <img
                            src={myImage}
                            className="w-full h-full object-cover"
                            alt="Stephen Simon"
                        />
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;
