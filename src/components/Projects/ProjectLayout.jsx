import Project from "./Project";
import { projects_data } from "../../assets/data";
import { useEffect, useState } from "react";
import { db } from "../../assets/firebase-config";
import {collection, getDocs} from "firebase/firestore"
import Loader from "./Loader";
const ProjectLayout = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const projectCollections = collection(db, "projects")
    useEffect(()=>{
        setLoading(true);
            const fetchProjects = async () => {
                try {
                    const data = await getDocs(projectCollections);
                    console.log(data);
                    setProjects((await data).docs.map((doc)=>({...doc.data(), id: doc.id})))
                    setLoading(false);
                } catch (error) {
                    
                }
            } 
            fetchProjects();
   
    },[])
    // useEffect(()=>{
    //     console.log(projects);
    // },[projects])
return (    <>
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Portfolio</h2>
            {
            loading ?
            (
                <Loader />
            )
            : (
                projects.map((data)=>(
                    <Project key={data.id} data={data} />
                ))
            )
            }

        </section>
    </>
);
            
}
export default ProjectLayout;