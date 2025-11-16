import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import { useProjects } from "../../hooks/usePortfolioData";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const ProjectLayout = () => {
    const { data: projects, isLoading, isError } = useProjects();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <div className="max-w-[1920px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[30px] lg:text-[40px] my-10 text-slate-700 dark:text-slate-300 font-bold text-center"
                >
                    My Portfolio
                </motion.h2>

                <div ref={ref}>
                    {isLoading ? (
                        <Loader />
                    ) : isError ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center gap-4 py-20"
                        >
                            <FontAwesomeIcon icon={faWifi} size="3x" className="text-red-500" />
                            <p className="text-red-500 text-center text-lg">
                                Couldn&apos;t load projects. Please check your internet connection.
                            </p>
                        </motion.div>
                    ) : projects && projects.length > 0 ? (
                        <div className="space-y-8">
                            {projects.map((data, index) => (
                                <motion.div
                                    key={data.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Project data={data} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                                No projects available at the moment.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectLayout;