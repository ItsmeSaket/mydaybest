import React from 'react';
import axios from "axios";
import { useState } from "react";
import "./login.css"

// IMAGES

// navbar images
import navlogo from "../../images/navlogo.png"
import separator from "../../images/separator.png"
import webName from "../../images/webName.png"

//form images
import vector1 from "../../images/Vector1.png"
import { useNavigate } from 'react-router';

export const ForgotPassword = () => {

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitButton = () => {
        setIsLoading(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        axios.post('/user/forgotPassword', {
            "email": String(email),
        })
            .then((response) => {
                console.log(response)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                    navigate('/login')
                }, 3000)

            })
            .catch(error => {
                console.log(error)
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                }, 2000)
            })
    }

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
                        <h1 className='mb-4'>Forgot Password</h1>
                        <form className='myForm' onSubmit={handleSubmit} action="/home">
                            <div className="row box-email mb-1">
                                <div className="col-sm-10">
                                    <input className='sin-in' type="email" id='email' placeholder="Enter Your Registered Email" name="email" required />
                                </div>
                                <div className="col-sm-2 res0">
                                    <img className='res1' src={vector1} alt="email" />
                                </div>
                            </div>
                            {isError && <p className='new-pwd-message'>This email is not registered with us</p>}

                            <button className="btn btn-success mt-4" onClick={submitButton}>Send Mail</button>

                        </form>
                    </div>
                </div>

                {isLoading && <div className="my-spin">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> }
                {success && <p className='new-pwd-message'>An email has been sent to your mail to reset the password. Redirecting to login page.</p>}
            </div>
        </>
    )
}
