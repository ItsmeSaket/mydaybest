import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import { useNavigate } from 'react-router-dom'

// images
import navlogo from "../../images/navlogo.png"
import separator from "../../images/separator.png"
import webName from "../../images/webName.png"
import bell from "../../images/bell.png"
import profileImg from "../../images/profileImg.png"


export const Navbar = () => {
    const [login, setLogin] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    // console.log(token, "nav token initial");
    const signOut = () => {
        localStorage.removeItem('token');
        alert("Are you sure to sign out?")
        navigate('/login')
    }

    useEffect(() => {

        if (!token) {
            setLogin(false)
        }
    }, [])
    
    if (!login) {
        navigate('/login')
    }
    

    return (
        <div className="db-navbar">
            <nav className='outer-nav'>
                <div className="left-nav">
                    <img className='navlogo' src={navlogo} alt="logo" />
                    <img className='separator' src={separator} alt="separator" />
                    <img className='webname' src={webName} alt="name" />
                </div>
                <div className="right-nav">
                    <form action="/">
                        <div className="search-img">
                            <input className='search-box margin-nav' type="text" placeholder='Search' />
                            <button className='search-btn' type='submit'><i class="fas fa-search"></i></button>
                        </div>
                    </form>
                    <img className='bell' src={bell} alt="" />

                    <select className='dropdown' name="lang" id="lang">
                        <option value="volvo">ENG</option>
                        <option value="saab">HIN</option>
                    </select>
                    <img className='bell' src={profileImg} alt="" />
                    <button className='logout-btn' onClick={signOut}>Logout</button>
                </div>
            </nav>
        </div>
    )
}
