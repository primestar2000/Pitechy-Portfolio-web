import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import projectBgImage from "../../assets/images/Frost.jpg";
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import CategorySection from './CategorySection';
import { useNavigate } from 'react-router-dom';

const Project = ({ data }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/project/${data.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="max-w-full shadow-2xl rounded-lg lg:rounded-3xl dark:bg-slate-800 bg-white m-4 items-center flex-col-reverse lg:p-10 flex lg:flex-row justify-between overflow-hidden hover:shadow-3xl transition-shadow duration-300"
        >
            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:w-1/2 p-6 lg:p-10 text-gray-600 dark:text-gray-300"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-bold text-2xl lg:text-3xl text-center lg:text-left my-2 capitalize text-gray-800 dark:text-white"
                >
                    {data.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:text-base text-sm text-justify leading-relaxed"
                >
                    {data?.description || data?.short_description || "No description available"}
                </motion.p>

                <CategorySection project={data} />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-3 mt-5"
                >
                    <motion.button
                        onClick={handleClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Read More
                    </motion.button>

                    {data.productionLink && (
                        <motion.a
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-violet-500 hover:text-violet-600 font-medium"
                            href={data?.productionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                            Visit Production
                        </motion.a>
                    )}
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative group shadow-md lg:w-[500px] w-full p-2 lg:p-6 rounded-xl flex justify-center items-center bg-black overflow-hidden"
                style={{ backgroundImage: `url(${projectBgImage})`, backgroundSize: 'cover' }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-[90%] flex justify-center items-center"
                >
                    <img
                        src={data.media.thumbnail}
                        alt={data.title}
                        className="rounded-xl object-cover h-full shadow-lg"
                    />
                </motion.div>

                {/* Overlay on Hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-violet-900 to-purple-900 absolute inset-0 opacity-0 group-hover:opacity-95"
                >
                    <h1 className="text-white text-2xl lg:text-3xl text-center font-bold">
                        View Live Demo
                    </h1>
                    <div className="flex gap-6">
                        {data.productionLink && (
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={data.productionLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="text-white hover:text-yellow-400 transition-colors"
                                    size="2x"
                                    icon={faGlobe}
                                />
                            </motion.a>
                        )}
                        {data.youtubeLink && (
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={data.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="text-white hover:text-red-500 transition-colors"
                                    size="2x"
                                    icon={faYoutube}
                                />
                            </motion.a>
                        )}
                        {data.githubLink && (
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={data.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="text-white hover:text-gray-300 transition-colors"
                                    size="2x"
                                    icon={faGithub}
                                />
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Project;