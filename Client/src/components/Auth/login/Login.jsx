import React from 'react';
import "./login.css"
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// IMAGES

// navbar images
import navlogo from "../../images/navlogo.png"
import separator from "../../images/separator.png"
import webName from "../../images/webName.png"

//form images
import vector from "../../images/Vector.png"
import vector1 from "../../images/Vector1.png"
import vector2 from "../../images/Vector2.png"
import line51 from "../../images/Line51.png"

export const Login = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [select, setSelect] = useState();
    const [validate, setValidate] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);


    const selectOption = ((e) => {
        setSelect(e.target.value)
    })

    const submitButton = () => {
        setIsLoading(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const usertype = select;

        axios.post('/user/signin', {
            "email": String(email),
            "password": String(password),
            "usertype": String(usertype)
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                setLoggedIn(true)
                localStorage.setItem("User_Id", response.data.user._id)
            })

            .catch(error => {
                console.log(error)
                setIsLoading(false)
                setValidate(true)
            })
    }


    // Toggle eye to hide show password 

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);

        var x = document.getElementById("cut");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };


    return (
        <>
            {loggedIn && navigate('/')}
            <div className='background'>

                <div className="login-navbar">
                    <nav className='outer-nav'>
                        <div className="left-nav">
                            <img className='navlogo' src={navlogo} alt="logo" />
                            <img className='separator' src={separator} alt="separator" />
                            <img className='webname' src={webName} alt="name" />
                        </div>
                    </nav>
                </div>

                <div className="login-content">
                    <div className="formBox">
                        <h1>Let’s Start</h1>
                        <form className='myForm' onSubmit={handleSubmit} action="/home">
                            <div className="row box-email">
                                <div className="col-sm-10">
                                    <input className='sin-in' type="email" id='email' placeholder="Email" name="email" required />
                                </div>
                                <div className="col-sm-2 res0">
                                    <img className='res1' src={vector1} alt="email" />
                                </div>
                            </div>
                            <div className="row box-email">
                                <div className="col-sm-10">
                                    <input className='sin-in' type={passwordShown ? "text" : "password"} placeholder="Password" name="password" id='password' required />
                                </div>
                                <div className="col-sm-2 eye-btn res0">
                                    <img className='res1' onClick={togglePassword} src={vector2} alt="password" />
                                    <img onClick={togglePassword} className='cut res2' src={vector} alt="password" />
                                    <img onClick={togglePassword} id='cut' className='cut res1' src={line51} alt="password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <select className='sin-slctout' value={select} onChange={selectOption} required >
                                        <option value="null" className='sin-slctin mycolor'>View As</option>
                                        <option className='sin-slctin'>Admin</option>
                                        <option className='sin-slctin'>Department</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 col">
                                    <div className="row-sm-4 righte"><Link className='fpwd-btn' to="/forgotpassword"><b> Forgot Password ? </b></Link></div>
                                    <div className="row-sm-6">
                                        <button type='submit' class="signin-btn" onClick={submitButton}>Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {isLoading && <div className="my-spin">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> }

                <div className="error">
                    {validate && <h2>Email or Password does not match</h2>}
                </div>


            </div>
        </>
    )
}
