import React from 'react'
import './skill.css'
const skills = () => {
    
  return (
    <>
<section id="skills" class="skills-section section-padding">
      <div class="container">
        <h1 id="glow" class="glow">SKILLS</h1>
        <div class="planet-div">
        <div id="planet-icon" onmouseup="PlayState('paused');" onmousedown="PlayState('running');">
        </div>
          </div>
          <div id="planet">          
               <table>
                  <tr><td onclick="togglePlanet('Pluto','0.071','0.186','6.39','0.0025');"></td></tr>
                  <tr><td onclick="togglePlanet('Neptune','1.12','3.88','0.671','17.1');"></td></tr>
                  <tr><td onclick="togglePlanet('Uranus','0.889','4.01','0.718','14.5');"></td></tr>
                  <tr><td onclick="togglePlanet('Saturn','0.916','9.45','0.444','95.2');"></td></tr>
                  <tr><td onclick="togglePlanet('Jupiter','2.36','11.21','0.414','317.8');"></td></tr>
                  <tr><td onclick="togglePlanet('Mars','0.377','0.532','1.03','0.107');"></td></tr>
                  <tr><td onclick="togglePlanet('Earth','1','1','1','1');"></td></tr>
                  <tr><td onclick="togglePlanet('Venus','0.907','0.949','116.8','0.815');"></td></tr>
                  <tr><td onclick="togglePlanet('Mercury','0.378','0.383','175.9','0.0553');"></td></tr>
              </table>
        </div>
        {/*progress bar*/}
        <div class="container-progress">
  <div id="left">
    <h1>Web Development</h1>
    <ul class="skills-bar-container">
      <label>HTML5 / CSS3</label>
      <span class="percent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-htmlcss"></span>
      </li>

      <label>JavaScript / jQuery</label>
      <span class="percent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-jsjq"></span>
      </li>

      <label>PHP</label>
      <span class="percent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-php"></span>
      </li>
    </ul>
  </div>
  <div id="right">
    <h1>Programming</h1>
    <ul class="skills-bar-container">
      <label>Java</label>
      <span class="percent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-java"></span>
      </li>

      <label>C#</label>
      <span class="percent" id="angular-pourcent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-csharp"></span>
      </li>
      
      <label>SQL / MySQL</label>
      <span class="percent" id="angular-pourcent"></span>
      <li>
        <span class="progressbar progressblue" id="progress-sql"></span>
      </li>
    </ul>
  </div>
</div>
      </div>
    </section>


    </>

  )
}

export default skills
