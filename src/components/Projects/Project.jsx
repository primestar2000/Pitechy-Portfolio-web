import projectBgImage from "../../assets/images/Frost.jpg"
import projectImage from "../../assets/images/healthpal.png"
import Tag from "../tags/Tag";
const Project = () => (
    <>
        <div className="max-w-full shadow-xl   lg:max-h-[450px] dark:bg-slate-800 items-center flex-col-reverse lg:p-10 flex lg:flex-row">
            <div className="lg:w-1/2 p-4  lg:p-10 text-slate-500 dark:text-white">
                <h2 className="font-bold text-2xl text-center lg:text-left my-2">HealthPAl AI</h2>
                {/* <p className="font-semibold text-xl text-center lg:text-left"><i>{`Website`}</i></p> */}
                <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit neque saepe, at quo nesciunt temporibus enim qui inventore cupiditate? </p>
                <div className="flex gap-4">
                    <Tag content={"React js"} />
                    <Tag content={"OpenAi API"} />
                </div>
                <button className="bg-violet-500 text-white p-2 my-5">Read More</button>
            </div>
            <div className=" shadow-md lg:w-[500px] w-full h-[350px] rounded-xl flex justify-center items-center bg-black" style={{backgroundImage: `url(${projectBgImage})`}}>
                <div className="w-[90%] h-[90%] flex justify-center items-center ">
                    <img src={projectImage} alt="image of health pal ai" className="rounded-xl object-cover  h-full" />
                </div>
            </div>
        </div>
    </>
);

export default Project;