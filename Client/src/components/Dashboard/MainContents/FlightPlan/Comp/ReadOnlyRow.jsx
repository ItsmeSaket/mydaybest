import React from 'react';
import "../AddDetails.css";

export const ReadOnlyRow = (props) => {
    return (
        <>
            <div className="col-md-4 first">
                <div className='fp-cd-flex'>
                    <b>District</b>
                    <span>: {props.District}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Crew Name</b>
                    <span>: {props.crewName}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Raider In-charge Name </b>
                    <span>: {props.rIncharge}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Flight Supervisor</b>
                    <span>: {props.fsuper}</span>
                </div>
            </div>
            <div className="col-md-4 first">
                <div className='fp-cd-flex'>
                    <b>Pilot Name</b>
                    <span>: {props.pilotName}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Crew ID</b>
                    <span>: {props.crewId}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Designation</b>
                    <span>: {props.dest}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Flight Supervisor ID</b>
                    <span>: {props.fSuperId}</span>
                </div>
            </div>
            <div className="col-md-4 first">
                <div className='fp-cd-flex'>
                    <b>Pilot ID</b>
                    <span>: {props.pilotId}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>UIN/DAN</b>
                    <span>: {props.uin}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Mobile</b>
                    <span>: {props.mobile}</span>
                </div>
                <div className='fp-cd-flex'>
                    <b>Authorized by</b>
                    <span>: {props.authBy}</span>
                </div>

            </div>
        </>
    )
}
