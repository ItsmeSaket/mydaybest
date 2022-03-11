import React from 'react';
import "./NewPassword.css"
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

// IMAGES

// navbar images
import navlogo from "../../images/navlogo.png"
import separator from "../../images/separator.png"
import webName from "../../images/webName.png"

//form images
import vector from "../../images/Vector.png"
import vector2 from "../../images/Vector2.png"
import line51 from "../../images/Line51.png"
import axios from 'axios';

export const NewPassword = () => {

    const [passwordMatch , setPasswordMatch] = useState(false)
   
    const navigate = useNavigate()

    // Toggle eye to hide show password 
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

    const params = useParams();
    const token = String(params.token)
    console.log(typeof(token))
    const submitHandler = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const confirmPassword = e.target.password2.value;
        if(password === confirmPassword) {
            axios.put(`/user/password/reset/${token}`, {
                "password" : password,
                "confirmPassword":confirmPassword
            })
            .then((response => {
                alert("Password Changed Successfully")
                navigate('/login')
            }))
            .catch(err => {
                console.log(err)
            })



        }else {
            setPasswordMatch(true)
        }
    }

    const togglePassword1 = () => {
        setPasswordShown1(!passwordShown1);

        var x = document.getElementById("cut1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };

    const togglePassword2 = () => {
        setPasswordShown2(!passwordShown2);

        var x = document.getElementById("cut2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };


    return (
        <>
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
                        <h1 className='mb-5'>Change Password</h1>
                        <form className='myForm' onSubmit={submitHandler}>
                            <div className="row box-email">
                                <div className="col-sm-10">
                                    <input className='sin-in' type={passwordShown1 ? "text" : "password"} placeholder="New Password" name="password" id='password' required />
                                </div>
                                <div className="col-sm-2 eye-btn res0">
                                    <img className='res1' onClick={togglePassword1} src={vector2} alt="password" />
                                    <img onClick={togglePassword1} className='cut res2' src={vector} alt="password" />
                                    <img onClick={togglePassword1} id='cut1' className='cut res1' src={line51} alt="password" />
                                </div>
                            </div>
                            <div className="row box-email">
                                <div className="col-sm-10">
                                    <input className='sin-in' type={passwordShown2 ? "text" : "password"} placeholder="Confirm New Password" name="password2" id='password2' required />
                                </div>
                                <div className="col-sm-2 eye-btn res0">
                                    <img className='res1' onClick={togglePassword2} src={vector2} alt="password" />
                                    <img onClick={togglePassword2} className='cut res2' src={vector} alt="password" />
                                    <img onClick={togglePassword2} id='cut2' className='cut res1' src={line51} alt="password" />
                                </div>
                            </div>
                            { passwordMatch && <p className='new-pwd-message mt-2'>Password Do not Match</p> }

                            <button className="btn btn-success mt-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
