import Project from "./Project";
import { projects_data } from "../../assets/data";
const ProjectLayout = () => (
    <>
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Portfolio</h2>
            {projects_data.map((data)=>(
                <Project key={data.id} data={data} />
            ))}

        </section>
    </>
);

export default ProjectLayout;