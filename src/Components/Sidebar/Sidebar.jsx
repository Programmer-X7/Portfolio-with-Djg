import './sidebar.scss'
import ToggleButton from './ToggleButton/ToggleButton';
import Links from './Links/Links';
import { useState } from 'react';
import {motion} from 'framer-motion'

const variants={
    open:{
        clipPath:"circle(12000px at 50px 50px)",
        transition:{
            type:"spring",
            damping:20,
        },
    },
    closed: {
        clipPath:"circle(25px at 50px 48px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
    ,
}
const Sidebar = () => {
    const [open,setOpen]=useState(false);

    
  return (
    
    <motion.div className='sidebar' animate={open? "open":"closed"}>
        <motion.div className='bg' variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};

export default Sidebar;