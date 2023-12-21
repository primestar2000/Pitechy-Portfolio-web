import Nav from "../Nav/Nav";
import myImage from "../../assets/images/my-image.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter';
const Header = () => (
    <>
    <div className="w-full h-screen dark:bg-black dark:text-white">
        <Nav />
        <div className="flex justify-center">
            <div className="w-full p-10 max-w-screen-lg flex items-center  ">
                {/* hero section write up */}
                <div className="flex-1">
                    <h1 className="text-[44px] font-bold text-slate-500">I'm Stephen <span className="text-violet-500">Simon</span></h1>
                    <h1 className="text-[30px] text-slate-500">
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
                    <div className="flex gap-8 my-6">
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faFacebookF} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faYoutube} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faInstagram} />
                        <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faTwitter} />
                    </div>
                    <button className="bg-violet-500 p-3 text-lg font-bold my-6 text-white">
                        Get Resume
                        <FontAwesomeIcon icon={faDownload} className="mx-2" />
                        </button>
                </div>
                {/* hero section image */}
                <div className="w-[350px] h-[350px] bg-slate-50 rounded-full">
                    <img src={myImage} className="w-full h-full object-cover rounded-full" alt="stephen simon image" />
                </div>
            </div>
        </div>
    </div>
    </>
)
export default Header;