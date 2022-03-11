import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


// images 
import basemapimg from "../../../images/Basemap.png"

export const Home = () => {
  return (
    <>
      <div className='flexme'>
        <Link className='flexme-btn black' to="/tillnow">TILL NOW</Link>
        <Link className='flexme-btn green' to="/previousday">PREVIOUS DAY</Link>
      </div>





      <div className="infos">
        <div className="info">
          <p className=' c1'>234</p>
          <span>Hour of Survilance</span>
        </div>
        <div className="info">
          <p className='c2'>234</p>
          <span>Sortie Completed</span>
        </div>
        <div className="info">
          <p className='c3'>234</p>
          <span>Sq Km Serveillance</span>
        </div>
        <div className="info">
          <p className='c4'>234</p>
          <span>Detection</span>
        </div>
        <div className="info">
          <p className='c5'>234</p>
          <span>Raid</span>
        </div>
        <div className="info">
          <p className='c6'>234</p>
          <span>Liter Siezed</span>
        </div>
        <div className="info">
          <p className='c7'>234</p>
          <span>Arrested</span>
        </div>
      </div>

      <div className='map-box'>
        <div className="flex">
          <div className="dropdn">

            <div className="mydropdown">
              <p>Location Type</p>
              <select className='mydropdn' name="lang" id="lang">
                <option value="volvo">State</option>
                <option value="saab">HIN</option>
              </select>
            </div>

            <div className="mydropdown">
              <p>Type of Spot</p>
              <select className='mydropdn' name="lang" id="lang">
                <option value="volvo">Identified</option>
                <option value="saab">HIN</option>
              </select>
            </div>

          </div>
        </div>
        <img className='map' src={basemapimg} alt="map" />
      </div>

      <div className="infos">
        <div className="info">
          <p className=' c1'>234</p>
          <span>Number of Drones</span>
        </div>
        <div className="info">
          <p className='c2'>234</p>
          <span>Active Mobile Station</span>
        </div>
        <div className="info">
          <p className='c3'>234</p>
          <span>About to Raid</span>
        </div>
        <div className="info">
          <p className='c4'>234</p>
          <span>Spot Destroyed</span>
        </div>
        <div className="info">
          <p className='c5'>234</p>
          <span>Fire Registered</span>
        </div>
        <div className="info">
          <p className='c6'>234</p>
          <span>Vehicle Seized</span>
        </div>
        <div className="info">
          <p className='c7'>234</p>
          <span>Call Received</span>
        </div>
      </div>
    </>
  )
}
