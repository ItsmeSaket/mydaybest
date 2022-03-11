import React from 'react';
import "./Dashboard.css"
import { Outlet } from 'react-router';

// Components 
import { Navbar } from './Navbar/Navbar';
import { Sidenav } from './Sidenav/Sidenav';

export const Dashboard = () => {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="content">
                    <Sidenav />
                    <div className="main-contents">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
