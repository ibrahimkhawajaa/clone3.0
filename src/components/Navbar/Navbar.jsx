import React from 'react'
import './navbar.css'

import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => 
{
  return (
    <>
  
  <div className='navbar-main'>
      <div><NavLink to="/" className="Home-link">Home</NavLink>
 <NavLink to="/Projects" className="Home-link">Projects</NavLink>
 </div>
<div>

<a href="https://github.com/ibrahimkhawajaa" target='/blank'><GitHubIcon className='icon-social'/></a>

<a href=""  target='/blank' ><InstagramIcon className='icon-social'/></a>
</div>
 
 </div>
  </>
  )
}

export default Navbar
