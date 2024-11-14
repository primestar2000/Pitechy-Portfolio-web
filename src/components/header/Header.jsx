import Nav from "../Nav/Nav";
import myImage from "../../assets/images/me.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import Resume from "../../assets/NEW-RESUME.pdf";
import SocialMediaSection from "./SocialMediaSection";

const Header = () => (
    <header className="mx-auto bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-800 dark:to-gray-900 dark:text-white">
            <Nav />
        <div className=" w-full max-w-[1920px] mx-auto min-h-[700px] flex flex-col justify-center  ">
            <div className="h-full flex flex-col-reverse lg:flex-row items-center lg:justify-between p-10 gap-10 w-full ">
                
                {/* Hero Section Write-up */}
                <div className="w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[55px] font-extrabold text-white dark:text-gray-100">
                        I'm <span className="text-yellow-400">Stephen</span> <span className="text-yellow-400">Simon</span>
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-gray-200 my-3 dark:text-gray-300">
                        <span className="font-semibold">
                            <Typewriter
                                words={['FullStack Dev', 'Web Developer', 'Mobile App Dev', 'React.js Dev', 'React Native Dev', 'Laravel', 'Vanilla JS']}
                                loop={Infinity}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                />
                        </span>
                    </h2>
                    <p className="text-sm lg:text-[16px] 2xl:text-[24px] leading-normal text-justify text-gray-300 dark:text-gray-400  mx-auto lg:mx-0">
                        Welcome to my Code Haven! I'm <span className="text-yellow-400">Stephen Simon</span>, a passionate software developer skilled in crafting elegant, user-friendly solutions for diverse challenges in the dynamic world of coding.
                    </p>
                    
                    <div className="flex gap-6 my-6 justify-center lg:justify-start">
                        <SocialMediaSection />
                        {/* <FontAwesomeIcon className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300" icon={faFacebookF} />
                        <FontAwesomeIcon className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300" icon={faYoutube} />
                        <FontAwesomeIcon className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300" icon={faInstagram} />
                        <FontAwesomeIcon className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300" icon={faTwitter} />
                        <FontAwesomeIcon className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300" icon={faGithub} /> */}
                    </div>
                    
                    <a href={Resume} download="stephen_resume.pdf">
                        <button className="bg-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg transition-all hover:bg-transparent hover:border-yellow-400 hover:border-2 hover:text-yellow-400 active:bg-yellow-400/80 active:scale-95">
                            Get Resume
                            <FontAwesomeIcon icon={faDownload} className="ml-2" />
                        </button>
                    </a>
                </div>
                
                {/* Hero Section Image */}
                <div className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] bg-gray-100 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                    <img src={myImage} className="w-full h-full object-cover" alt="Stephen Simon" />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
