import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav/Nav";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PlayIcon from "../assets/icons/playIcon";
import ReadMoreText from "../components/widget/read-more-text";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../assets/firebase-config";
import { useParams } from "react-router-dom";
import CategorySection from "../components/Projects/CategorySection";
import { toast } from "react-toastify";
import SplashScreen from "../components/splash-screen/SplashScreen";

const ProjectPage = () => {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState(null | '');
  const [media, setMedia] = useState([]);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectDoc = await getDoc(doc(db, "projects", id));
        const project = projectDoc.data();

        if (!project || !project.media) {
          setProjectData({});
          setMedia([]);
          return;
        }

        const images = project.media.images.map((image) => ({
          type: "image",
          data: { file: image },
        }));
        const videos = project.media.videos.map((video) => ({
          type: "video",
          data: { file: video },
        }));

        setProjectData(project);
        setMedia([{ type: "image", data: { file: project.media.thumbnail } }, ...images, ...videos]);
      } catch (error) {
        console.error("Error fetching project data:", error);
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    // if(media){
    //   console.log(media)
    // }
  
    fetchProject();
    console.log(projectData.features)
    if (media.length > 0) {
      setActiveMediaIndex(0); 
    }
  }, [id]);

  const handlePrevious = () => {
    setActiveMediaIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : media.length - 1));
    
  };

  const handleNext = () => {
    setActiveMediaIndex((prevIndex) => (prevIndex < media.length - 1 ? prevIndex + 1 : 0));
  };

  if (loading) return <SplashScreen />;

  return (
    <div className="w-full bg-white dark:bg-slate-900 min-h-screen flex flex-col">
      <Nav />
      <div className="w-full p-2 flex flex-col lg:flex-row lg:p-6 gap-4 lg:gap-x-6">
        <div className="flex flex-col">
          <div className="relative w-full h-[300px] max-w-[700px] lg:h-[400px] bg-slate-100 rounded-xl overflow-hidden">
            <button onClick={(e)=>{handlePrevious(); }} className="absolute rounded-full w-10 h-10 bg-amber-400 mx-2 top-1/2 -translate-y-1/2">
              <FontAwesomeIcon color="white" icon={faChevronLeft} />
            </button>
            <button onClick={(e)=>{handleNext(); }} className="absolute right-0 rounded-full w-10 bg-amber-400 h-10 mx-2 top-1/2 -translate-y-1/2">
              <FontAwesomeIcon color="white" icon={faChevronRight} />
            </button>
            {media[activeMediaIndex]?.type === "image" ? (
              <img className="w-full h-full object-contain p-2"  loading="lazy" src={media[activeMediaIndex].data.file} alt="" />
            ) : (
              <video className="w-full h-full object-cover" src={media[activeMediaIndex]?.data.file} controls />
            )}
          </div>
          
          {/*  */}
          <div className="w-full overflow-x-auto flex h-fit mt-2 p-4 scroll-smooth whitespace-nowrap touch-pan-x  gap-x-2 rounded-xl  bg-slate-50 dark:bg-slate-800 lg:max-w-[700px]">
            {media.map((data, index) => (
              <div  onClick={()=>{setActiveMediaIndex(index)}} key={index} className={`flex-shrink-0 relative w-[100px] h-[100px] bg-neutral-600 rounded border-solid border-[3px]  ${ activeMediaIndex === index ? ' border-amber-500' : 'border-slate-600'}`}>
                {data.type === "video" && (
                  <span className="absolute p-2 rounded-full bg-white/60 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <PlayIcon width={15} height={15} />
                  </span>
                  
                )}
                <img className="w-full h-full object-cover" src={data.data.file} alt="" />
              </div>
            ))}
          </div>
        </div>
      {/*  */}
      <div className="p-4 lg:p-6 flex-1 bg-slate-50/50 dark:bg-slate-800 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-500 dark:text-neutral-300 text-center my-2">
            {projectData?.title || "Project Title"}
          </h2>
          <ReadMoreText className="text-xs text-center lg:text-left font-normal text-neutral-500 dark:text-neutral-300">
            { projectData?.description || projectData?.short_description || "No description available"}
          </ReadMoreText>
          <h2 className="text-lg font-medium text-neutral-500 dark:text-neutral-300 text-center my-2">Categories</h2>
          <div  className="flex justify-center text-slate-600 dark:text-slate-300">
            <CategorySection project={projectData} />
          </div>
          <div>
          <h2 className="text-lg font-medium text-neutral-500 dark:text-neutral-300 text-center my-2">Role / Features</h2>

            <ul className="list-disc flex flex-col gap-2">
              {
                projectData.features && projectData.features.map((feature, index)=>(
                  <li key={index} className="text-[10px] text lg:text-xs text-neutral-500 dark:text-neutral-300">{feature.value}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProjectPage;
