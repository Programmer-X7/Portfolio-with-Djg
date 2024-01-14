import './hero.scss'
import {motion} from 'framer-motion'

const slidingVariants={
  initial:{
    x:0,
},
animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    }
    
}
}

const textVariants={
  initial:{
      x:-500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity :1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      }
      
  }
}
const Hero = () => {
  return (
    <motion.div className='hero'
     variants={textVariants}
     initial="initial" 
     animate="animate"
     >
        <div className="wrapper" variants={textVariants}>
        <motion.div className='text-container' variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Dhananjoy Ghosh</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
            <motion.div className='buttons' variants={textVariants}>
                <motion.button href="#" variants={textVariants}>See My Journey</motion.button>
                <motion.button href="#" variants={textVariants} >Contact Me</motion.button>
            </motion.div>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slidingVariants} initial="initial" animate="animate">
            Bengal College of Engineering & Technology 125
        </motion.div>
        <img className='image-container' src="/me.png" alt =""/>
    </motion.div>
  )
}

export default Hero;