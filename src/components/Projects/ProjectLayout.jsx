import Project from "./Project";
import { projects_data } from "../../assets/data";
import { useEffect, useState } from "react";
import { db } from "../../assets/firebase-config";
import {collection, getDocs, query, where} from "firebase/firestore"
import Loader from "./Loader";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
const ProjectLayout = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const projectCollections = query(collection(db, "projects"), where('status', '==', 1))
    useEffect(()=>{
        setLoading(true);
            const fetchProjects = async () => {
                try {
                    const data = await getDocs(projectCollections);
                    console.log(data);
                    setProjects((data).docs.map((doc)=>({...doc.data(), id: doc.id})))
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    toast.error('Couldn`t Load Projects, Please check your network.')
                }
            } 
            fetchProjects();
   
    },[])
    // useEffect(()=>{
    //     console.log(projects);
    // },[projects])
return (    <>
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <div className="max-w-[1920px] mx-auto">
                <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Portfolio</h2>
                {
                loading ?
                (
                    <Loader />
                )
                : (
                    projects.length > 0 ?
                    projects.map((data)=>(
                        <Project key={data.id} data={data} />
                    ))
                    : 
                    <div className="flex items-center justify-center gap-x-2">
                        <p className="text-red-500 text-center">Couldn't Load Projects please check Internet</p>
                        <FontAwesomeIcon icon={faWifi} color="red" />
                    </div>
                )
                }
            </div>

        </section>
    </>
);
            
}
export default ProjectLayout;