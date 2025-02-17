import { faCss3, faGit, faHtml5, faJs, faLaravel, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

const SkillsLayout = () => (
    <>
        <section id="skills" className="px-4 lg:p-10 dark:bg-slate-900">
            <div className="max-w-[1920px] mx-auto">
                <h2 className="text-[30px] py-10 text-slate-500 font-bold text-center">Skills</h2>
                <div className="flex flex-col gap-5 lg:flex-row justify-evenly items-center">
                    <div className="shadow-xl h-fit lg:min-h-[200px] w-full max-w-[800px] p-10 rounded-2xl bg-white dark:bg-slate-800 ">
                        <h2 className="text-[18px] mb-4 font-semibold text-slate-500 text-center">FrontEnd</h2>
                        <div className="flex justify-center flex-wrap gap-5">
                            <Skill icon={faReact} title={"react js"} color={"violet"}/>
                            <Skill icon={faReact} title={"react native"} color={"blue"}/>
                            <Skill icon={faCss3} title={"css"} color={"blue"}/>
                            <Skill icon={faJs} title={"javascript"} color={"#ffc107"}/>
                            <Skill icon={faHtml5} title={"html"} color={"red"}/>
                        </div>
                    </div>
                    <div className="shadow-xl h-fit lg:min-h-[200px] w-full max-w-[800px] p-10 rounded-2xl bg-white dark:bg-slate-800">
                        <h2 className="text-[18px] mb-4 font-semibold text-slate-500 text-center">Backend</h2>
                        <div className="flex justify-center flex-wrap gap-4">
                            <Skill icon={faLaravel} title={"Laravel"} color={"red"}/>
                            <Skill icon={faPhp} title={"php"} color={"indigo"}/>
                        </div>
                    </div>
                    <div className="shadow-xl h-fit lg:min-h-[200px] w-full max-w-[800px] p-10 rounded-2xl bg-white dark:bg-slate-800">
                        <h2 className="text-[18px] mb-4 font-semibold text-slate-500 text-center">OTHERS</h2>
                        <div className="flex justify-center flex-wrap gap-4">
                            <Skill icon={faGit} title={"git"} color={"red"}/>
                            <Skill icon={faMicrochip} title={"arduino"} color={"green"}/>
                            <Skill icon={faPython} title={"python"} color={"blue"}/>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    </>
);

export default SkillsLayout;