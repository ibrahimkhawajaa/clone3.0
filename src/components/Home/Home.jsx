import React from 'react'
import { useEffect} from 'react'
import './home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skill from './skills show/skills'
import About from './about/About'
import Icon from './icons-stuff/icon'
import Background from "./stars-black-.jpg"
const Home = () => {
useEffect(()=>{
  AOS.init();
},[]);


  return (
    <>
<div className='background-image-home' style={{
        backgroundImage: `url(${Background})`,
      }}>
        <div className='home-main'   >
          <div className='home-text-box'>
            <h1 className='heading-3'>✚</h1>
    <h1 className='heading-1' data-aos="zoom-in"  
    data-aos-delay="250"
    data-aos-easing="ease-in"
>Professional Self-Driven <br />Coder</h1>
    <h3 className='heading-2'data-aos="zoom-in"   
>based in pakistan</h3>

    </div>
    <div>
      <img src='./img/face.jpeg' alt="photo" className='face' />
    </div>
  
    </div>
    </div>
    <h1 className='arrow-down'>🡣</h1>  
       <About/> 
    <Icon/>
<Skill/>




    </>  
  )
}
export default Home;