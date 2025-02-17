import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebookF, faYoutube, faInstagram, faGithub, faInternetExplorer, faIntercom } from '@fortawesome/free-brands-svg-icons'
import projectBgImage from "../../assets/images/Frost.jpg"
import projectImage from "../../assets/images/healthpal.png"
import Tag from "../tags/Tag";
import { faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import CategorySection from './CategorySection';
import { useNavigate } from 'react-router-dom';
const Project = ({data}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/project/${data.id}`)
    }

   return (
    
        <>
            <div className="max-w-full shadow-xl rounded-lg lg:rounded-3xl  lg:max-h-[450px] dark:bg-slate-800 m-4 items-center flex-col-reverse lg:p-10 flex lg:flex-row justify-between">
                <div className="lg:w-1/2 p-6  lg:p-10 text-gray-500 dark:text-gray-400">
                    <h2 className="font-bold text-xl text-center lg:text-left my-2">{data.title}</h2>
                    {/* <p className="font-semibold text-xl text-center lg:text-left"><i>{`Website`}</i></p> */}
                    <p className="lg:text-sm text-xs  text-justify">{ data?.description || data?.short_description || "No description available"}</p>
                    <div className="flex space-x-4 flex-wrap">
                        {/* {data.tags.map((tag)=>(
                            <Tag key={tag} content={tag} />
                        ))} */}
    
                    </div>
                    <CategorySection project={data} />
                    <button onClick={handleClick} className="bg-violet-500 text-sm text-white p-2 my-5">Read More</button>
                </div>
                <div className="relative shadow-md lg:w-[500px] w-full p-2 lg:p-6 rounded-xl flex justify-center items-center bg-black" style={{backgroundImage: `url(${projectBgImage})`}} >
                    <div className="w-full h-[90%] flex justify-center items-center ">
                        <img src={data.media.thumbnail} alt="image of health pal ai" className="rounded-xl object-cover  h-full" />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-10 bg-black absolute opacity-0 hover:opacity-80">
                        <h1 className="text-white text-[30px] text-center">View live Demo on</h1>
                        <div className='flex gap-4'>
                            {/* <a href={"#"}>
                                <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faGlobe} />
                            </a>
                            <a href={data.Youtube_link}>
                                <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faYoutube} />
                            </a>
                            <a href={data.github_repo}>
                                <FontAwesomeIcon className="text-slate-500 hover:text-violet-500 hover:scale-125 dark:text-white transition-all ease-in-out delay-100 ease" size={"2x"} icon={faGithub} />
                            </a> */}
                        </div>
    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;