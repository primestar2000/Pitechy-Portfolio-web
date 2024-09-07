import Project from "./Project";
import { projects_data } from "../../assets/data";
import { useEffect, useState } from "react";
import { db } from "../../assets/firebase-config";
import {collection, getDocs} from "firebase/firestore"
const ProjectLayout = () => {
    const [projects, setProjects] = useState([]);
    const projectCollections = collection(db, "projects")
    useEffect(()=>{
        const fetchProjects = async () => {
            const data = getDocs(projectCollections);
            console.log(data);
            setProjects((await data).docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
        fetchProjects();
    },[])
    // useEffect(()=>{
    //     console.log(projects);
    // },[projects])
return (    <>
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Portfolio</h2>
            {projects.map((data)=>(
                <Project key={data.id} data={data} />
            ))}

        </section>
    </>
);
            
}
export default ProjectLayout;