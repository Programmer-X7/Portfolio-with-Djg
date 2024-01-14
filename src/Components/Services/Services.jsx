import './services.scss'
import { useRef } from 'react'
import {  motion,useInView } from 'framer-motion'

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }

    }
}
const Services = () => {
    const ref = useRef();
    const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='services' variants={variants} initial="initial"  //whileInView="animate"//
    ref={ref} animate={"animate"}
    >
        <motion.div className="textContainer"variants={variants}>
            <p>I focus on helping your Website to be ready <br/> and maintainence</p>
            <hr/>

        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1><motion.b1 whileHover={{color:"orange"}}>Unique </motion.b1> Ideas</h1>

            </div>
            <div className="title">
                
                <h1><motion.b1 whileHover={{color:"orange"}} >For Your </motion.b1> Business</h1>
                <button>What I Do ?</button>
            </div>
            
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>MongoDB</h2>
                <p>MongoDB is a widely used NoSQL database that stores data in flexible, JSON-like documents known as BSON (Binary JSON).</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Express.js</h2>
                <p>Express.js is a minimal and flexible Node.js web application framework that simplifies the development of robust and scalable web applications.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>React.js</h2>
                <p>
                   React.js is a declarative JavaScript library for building user interfaces, developed and maintained by Facebook.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Node.js</h2>
                <p>Node.js is an open-source, server-side JavaScript runtime that allows developers to execute JavaScript code outside of a web browser. </p>
                <button>Go</button>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Services