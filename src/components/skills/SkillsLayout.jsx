import { faCss3, faGit, faHtml5, faJs, faLaravel, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

const SkillsLayout = () => (
    <>
        <section className=" p-10 dark:bg-slate-900">
            <h2 className="text-[40px] my-10 text-slate-500 font-bold text-center">Skills</h2>
            <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
                <div className="shadow-xl min-h-[250px] w-full max-w-[400px] p-10 rounded-2xl bg-white dark:bg-slate-800 ">
                    <h2 className="text-[24px] mb-4 font-semibold text-slate-500 text-center">FrontEnd</h2>
                    <div className="flex flex-wrap gap-5">
                        <Skill icon={faReact} title={"react js"} color={"violet"}/>
                        <Skill icon={faReact} title={"react native"} color={"blue"}/>
                        <Skill icon={faCss3} title={"css"} color={"blue"}/>
                        <Skill icon={faJs} title={"javascript"} color={"#ffc107"}/>
                        <Skill icon={faHtml5} title={"html"} color={"red"}/>
                    </div>
                </div>
                <div className="shadow-xl min-h-[250px] w-full max-w-[400px] p-10 rounded-2xl bg-white dark:bg-slate-800">
                    <h2 className="text-[24px] mb-4 font-semibold text-slate-500 text-center">Backend</h2>
                    <div className="flex flex-wrap gap-4">
                        <Skill icon={faLaravel} title={"Laravel"} color={"red"}/>
                        <Skill icon={faPhp} title={"php"} color={"indigo"}/>
                    </div>
                </div>
                <div className="shadow-xl min-h-[250px] w-full max-w-[400px] p-10 rounded-2xl bg-white dark:bg-slate-800">
                    <h2 className="text-[24px] mb-4 font-semibold text-slate-500 text-center">OTHERS</h2>
                    <div className="flex flex-wrap gap-4">
                        <Skill icon={faGit} title={"git"} color={"red"}/>
                        <Skill icon={faMicrochip} title={"arduino"} color={"green"}/>
                        <Skill icon={faPython} title={"python"} color={"blue"}/>
                    </div>
                </div>
            </div>
            

        </section>
    </>
);

export default SkillsLayout;