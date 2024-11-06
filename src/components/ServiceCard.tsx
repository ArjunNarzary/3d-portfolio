import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';

import { IService } from '../interfaces';
import { fadeIn } from '../utils/motion';

interface IServiceCardProps {
    index: number;
    title: IService['title'];
    icon: IService['icon'];
}

const ServiceCard = ({ index, title, icon }: IServiceCardProps) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;
