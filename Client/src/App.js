import React from 'react';
import './App.css';
import { Navigate } from 'react-router';

// import { Login } from './components/Auth/login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';
import WithoutNav from './components/Dashboard/WithoutNav';
import { Login } from './components/Auth/login/Login';
import { Home } from './components/Dashboard/MainContents/Home/Home';
import { Gallery } from './components/Dashboard/MainContents/PhotosNVideos/Gallery';
import { FlightPlan } from './components/Dashboard/MainContents/FlightPlan/FlightPlan';
import AcPass from './components/Dashboard/MainContents/AcPass/AcPass';
import { Analytics } from './components/Dashboard/MainContents/Analytics/Analytics';
import { Awareness } from './components/Dashboard/MainContents/Awareness/Awareness';
import { DcPass } from './components/Dashboard/MainContents/DcPass/DcPass';
import { IdentifiedArea } from './components/Dashboard/MainContents/IdentifiedArea/IdentifiedArea';
import { LiveTrack } from './components/Dashboard/MainContents/LiveTrack/LiveTrack';
import { Milestones } from './components/Dashboard/MainContents/Milestones/Milestones';
import { Profile } from './components/Dashboard/MainContents/Profile/Profile';
import { RcPass } from './components/Dashboard/MainContents/RcPass/RcPass';
import { Spot } from './components/Dashboard/MainContents/Spot/Spot';


import {
  Routes,
  Route
} from "react-router-dom";
import { AddDetails } from './components/Dashboard/MainContents/FlightPlan/AddDetails';
import { NewPassword } from './components/Auth/login/NewPassword';
import { ForgotPassword } from './components/Auth/login/ForgotPassword';

function App() {
  return (
    <>
      <Routes>

        <Route element={<WithoutNav />}>
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<NewPassword />} />
        </Route>

        <Route element={<Dashboard />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/flightplan" element={<FlightPlan />} />
          <Route exact path="/acpass" element={<AcPass />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/awareness" element={<Awareness />} />
          <Route exact path="/dcpass" element={<DcPass />} />
          <Route exact path="/identified" element={<IdentifiedArea />} />
          <Route exact path="/livetrack" element={<LiveTrack />} />
          <Route exact path="/milestones" element={<Milestones />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/rcpass" element={<RcPass />} />
          <Route exact path="/spot" element={<Spot />} />
          <Route exact path="/flightplan/adddetails" element={<AddDetails />} />
        </Route>

        <Route path='*' element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
