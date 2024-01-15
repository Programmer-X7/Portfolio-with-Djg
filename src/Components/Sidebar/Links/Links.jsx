import { motion } from 'framer-motion';

const variants={
  open:{
    transition:{
      staggerChildren:0.1,
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
     

    },
  },
};
const itemVariants={
  open:{
    transition:{
      staggerChildren:0.1,
      delay:1,
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
    },
  },
};

const Links = () => {
  const items=[
    "Homepage",
    "Projects",
    "Services",
    "Contact",
  ];
  return (

    <motion.div className='links' variants={variants}> 
      {items.map(item=>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
    ))}
    </motion.div>
  );
};

export default Links;