import './portfolio.scss'
import { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
const items=[
  {
    id:1,
    title:"App",
    img:"https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"Hle hlw"
  },
  {
    id:2,
    title:"Web",
    img:"https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"hlw hlw"
  },
  {
    id:3,
    title:"Travel",
    img:"https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/1521580/pexels-photo-1521580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"how how "
  },
]


const Single=({item})=>{
  const ref=useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    //offset:["end end ", "start start"],
  });
  const y=useTransform(scrollYProgress,[0,1],[-300,300]);
  
  return (
    <section >
      <div className="container" ref={ref}>
        <div className="wrapper">
          <div className="image-container" ref={ref}>
              <img src={item.img} alt=""/>
          </div>
        <motion.div className="textContainer" style={{y}}>
           <h2 >{item.title}</h2>
           <p>{item.desc}</p>
           <button>Github Link</button>
        </motion.div>
        </div>
      </div>
     
    </section>
  )
};
const Portfolio = () => {
  const ref = useRef();
  
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["end end","start start"],
  });

  const {scaleX} = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scaleX}}></motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio;