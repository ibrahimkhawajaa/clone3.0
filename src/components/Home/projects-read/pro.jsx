
import "./project.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser'
 import { useState } from "react"; 
const projects = () => {





  return (
  <>

    <h1 class="section-header">Contact</h1>
<section id="contact">
  
  
  <div class="contact-wrapper">
  

    {/* <form id="contact-form" class="form-horizontal"  role="form"></form> */}
    <form
  action="https://formspree.io/f/myyqnbza"
  method="POST"
  id="contact-form" class="form-horizontal"  role="form"
>
      <div class="form-group">
        <div class="col-sm-12">
           <input type="text" class="form-control" id="name" placeholder="NAME"  name="Name"/> 
        </div>
      </div>

      <div class="form-group">
        <div class="input">
          <input type="email" class="form-control" id="email" placeholder="EMAIL"  name="Email"/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="send">
      
      <h1 class="send-text">Send</h1>
       
      
      </button>
      
    </form>
    
 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Lahore, Pakistan</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(+92) 325-9330819</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">ibrahimmkhawajaa@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <InstagramIcon/></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
          <GitHubIcon/></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
          <InstagramIcon/></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
          <InstagramIcon/></a>
          </li>       
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
</>

    
  );
};

export default projects;
