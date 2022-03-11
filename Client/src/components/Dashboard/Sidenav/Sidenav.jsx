import React from 'react';
import "./Sidenav.css";
import { NavLink } from 'react-router-dom';


// Images 
import snav1 from "../../images/snav1b.png"
import snav2 from "../../images/snav2.png"
import snav3 from "../../images/snav3.png"
import snav4 from "../../images/snav4.png"
import snav5 from "../../images/snav5.png"
import snav6 from "../../images/snav6.png"
import snav7 from "../../images/snav7.png"
import snav8 from "../../images/snav8.png"
import snav9 from "../../images/snav9.png"
import snav10 from "../../images/snav10.png"
import snav11 from "../../images/snav11.png"
import snav12 from "../../images/snav12.png"
import snav13 from "../../images/snav13.png"


export const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="m-top">

        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/">
          <img className='snav-icons' src={snav1} alt="snav1" />
          <p className='snav-link'>Home</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/flightplan">
          <img className='snav-icons' src={snav5} alt="snav1" />
          <p className='snav-link'>Flight Plan</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/gallery">
          <img className='snav-icons' src={snav2} alt="snav1" />
          <p className='snav-link'>Photos and Videos</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/profile">
          <img className='snav-icons' src={snav3} alt="snav1" />
          <p className='snav-link'>Profile</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/spot">
          <img className='snav-icons' src={snav4} alt="snav1" />
          <p className='snav-link'>Spot</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/livetrack">
          <img className='snav-icons' src={snav6} alt="snav1" />
          <p className='snav-link'>Live Track</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/analytics">
          <img className='snav-icons' src={snav7} alt="snav1" />
          <p className='snav-link'>Analytics</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/identified">
          <img className='snav-icons' src={snav8} alt="snav1" />
          <p className='snav-link'>Identified Area</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/milestones">
          <img className='snav-icons' src={snav9} alt="snav1" />
          <p className='snav-link'>Milestones</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/awareness">
          <img className='snav-icons' src={snav10} alt="snav1" />
          <p className='snav-link'>Awareness and Campaign</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/acpass">
          <img className='snav-icons' src={snav11} alt="snav1" />
          <p className='snav-link'>AC - Pass</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/dcpass">
          <img className='snav-icons' src={snav12} alt="snav1" />
          <p className='snav-link'>DC - Pass</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to="/rcpass">
          <img className='snav-icons' src={snav13} alt="snav1" />
          <p className='snav-link'>RC - Pass</p>
        </NavLink>
      </div>
    </div>
  )
}
