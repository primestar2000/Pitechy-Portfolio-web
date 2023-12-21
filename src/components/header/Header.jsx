import Nav from "../Nav/Nav";
import myImage from "../../assets/images/my-image.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter';
const Header = () => (
    <>
    <div className="w-full h-screen md:max-h-[600px] dark:bg-black dark:text-white">
        <Nav />
        <div className="flex justify-center">
            <div className="w-full p-10 gap-10  max-w-screen-lg flex items-center flex-col-reverse md:flex-row ">
                {/* hero section write up */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <h1 className="text-[30px] md:text-[44px] font-bold text-slate-500">I'm Stephen <span className="text-violet-500">Simon</span></h1>
                    <h1 className="text-[20px] md:text-[30px] text-slate-500">
                        {' '}
                        <span style={{  fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[
                            'FullStack Dev',
                            'React js Dev',
                            'React Native Dev (Mobile App)', 
                            'Laravel', 
                            'Valina js']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                    </h1>
                    <p className="text-justify text-slate-500 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis temporibus, dolore voluptate officiis reprehenderit eius ratione fuga, dignissimos nihil totam accusantium minus perspiciatis
                         laboriosam inventore voluptas ullam similique repellendus!</p>
                    <div className="flex gap-8 my-6">
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faFacebookF} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faYoutube} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faInstagram} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faTwitter} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faGithub} />
                    </div>
                    <button className="w-fit bg-violet-500 p-3 text-lg font-bold my-6 text-white active:bg-violet-500/80 active:scale-95 hover:bg-transparent hover:border-violet-500 hover:border-2 border-solid hover:text-violet-500 transition-all ease delay-75 active:text-slate-50">
                        Get Resume
                        <FontAwesomeIcon icon={faDownload} className="mx-2" />
                        </button>
                </div>
                {/* hero section image */}
                <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-slate-50 rounded-full">
                    <img src={myImage} className="w-full h-full object-cover rounded-full" alt="stephen simon image" />
                </div>
            </div>
        </div>
    </div>
    </>
)
export default Header;