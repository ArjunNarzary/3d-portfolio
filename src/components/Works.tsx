import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects, projectsText } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant(1)}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {projectsText}
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => <ProjectCard key={`project-${index}`} index={index} {...project} />)}
            </div>
        </>
    )
};

export default SectionWrapper(Works, "");
