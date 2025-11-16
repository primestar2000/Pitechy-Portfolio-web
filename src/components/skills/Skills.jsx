import { motion } from 'framer-motion';
import { useSkills } from '../../hooks/usePortfolioData';
import SkillIcon from '../SkillIcon';

const Skills = () => {
    const { skills, skillCategories, isLoading } = useSkills();

    const getSkillsByCategory = (categoryId) => {
        return skills?.filter(skill => skill.category === categoryId) || [];
    };

    if (isLoading) {
        return (
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="animate-pulse">Loading skills...</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills by Category */}
                <div className="space-y-16">
                    {skillCategories?.map((category, categoryIndex) => {
                        const categorySkills = getSkillsByCategory(category.id);

                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            >
                                {/* Category Title */}
                                <div className="mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {category.name}
                                    </h3>
                                    {category.description && (
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {category.description}
                                        </p>
                                    )}
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.id}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05
                                            }}
                                            whileHover={{ y: -8, scale: 1.05 }}
                                            className="group"
                                        >
                                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                                {/* Icon */}
                                                <div className="mb-4 flex justify-center">
                                                    {skill.icon && (
                                                        <SkillIcon
                                                            icon={skill.icon}
                                                            iconType={skill.iconType}
                                                            alt={skill.name}
                                                            className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    )}
                                                </div>

                                                {/* Skill Name */}
                                                <h4 className="text-center font-semibold text-gray-900 dark:text-white mb-3">
                                                    {skill.name}
                                                </h4>

                                                {/* Proficiency Bar */}
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                                                        <span>Proficiency</span>
                                                        <span>{skill.proficiency}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.proficiency}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                duration: 1,
                                                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                                                ease: "easeOut"
                                                            }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description (on hover) */}
                                                {skill.description && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0 }}
                                                        whileHover={{ opacity: 1, height: 'auto' }}
                                                        className="text-xs text-gray-600 dark:text-gray-400 mt-3 text-center"
                                                    >
                                                        {skill.description}
                                                    </motion.p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {
                    (!skillCategories || skillCategories.length === 0) && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                No skills added yet
                            </p>
                        </motion.div>
                    )
                }
            </div >
        </section >
    );
};

export default Skills;
