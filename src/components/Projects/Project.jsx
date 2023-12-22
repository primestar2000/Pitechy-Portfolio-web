import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebookF, faYoutube, faInstagram, faGithub, faInternetExplorer, faIntercom } from '@fortawesome/free-brands-svg-icons'
import projectBgImage from "../../assets/images/Frost.jpg"
import projectImage from "../../assets/images/healthpal.png"
import Tag from "../tags/Tag";
import { faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
const Project = ({data}) => (
    <>
        <div className="max-w-full shadow-xl   lg:max-h-[450px] dark:bg-slate-800 items-center flex-col-reverse lg:p-10 flex lg:flex-row">
            <div className="lg:w-1/2 p-6  lg:p-10 text-slate-500 dark:text-white">
                <h2 className="font-bold text-2xl text-center lg:text-left my-2">{data.title}</h2>
                {/* <p className="font-semibold text-xl text-center lg:text-left"><i>{`Website`}</i></p> */}
                <p className="text-sm ">{data.short_description}</p>
                <div className="flex gap-4">
                    {data.tags.map((tag)=>(
                        <Tag content={tag} />
                    ))}
                </div>
                <button className="bg-violet-500 text-white p-2 my-5">Read More</button>
            </div>
            <div className="relative shadow-md lg:w-[500px] w-full p-2 lg:p-6 rounded-xl flex justify-center items-center bg-black" style={{backgroundImage: `url(${projectBgImage})`}}>
                <div className="w-full h-[90%] flex justify-center items-center ">
                    <img src={projectImage} alt="image of health pal ai" className="rounded-xl object-cover  h-full" />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-10 bg-black absolute opacity-0 hover:opacity-80">
                    <h1 className="text-white text-[30px] text-center">View live Demo on</h1>
                    <div className='flex gap-4'>
                        <a href={"#"}>
                            <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faGlobe} />
                        </a>
                        <a href={data.Youtube_link}>
                            <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faYoutube} />
                        </a>
                        <a href={data.github_repo}>
                            <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faGithub} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </>
);

export default Project;