import React, { useState } from 'react';
import axios from 'axios';

const options = {
    headers: { "Content-Type": "application/json", 'x-auth-token': localStorage.getItem("token") }
}

export const EditableRow = (props) => {
    const [editableRow, setEditableRow] = useState({
        District:String(props.District),
        crewName: String(props.crewName),
        rIncharge: String(props.rIncharge),
        fsuper: String(props.fsuper),
        pilotName: String(props.pilotName),
        crewId: String(props.crewId),
        dest: String(props.dest),
        fSuperId: String(props.fSuperId),
        pilotId: String(props.pilotId),
        uin: String(props.uin),
        mobile: String(props.mobile),
        authBy: String(props.authBy)
    })


    const inputEvent = (event) => {
        const { value, name } = event.target;

        setEditableRow((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const [saveBtn, setSaveBtn] = useState(false)
   
    const onSubmit = (event) => {
        event.preventDefault();
        axios.put(`/operation_Log/Update_Details/?Date=${props.date}`,
          {
            User_Id: localStorage.getItem("User_Id"),
            District: editableRow.District,
            Crew_name: editableRow.crewName,
            Raider_Incharge_name: editableRow.rIncharge,
            Flight_Supervisor: editableRow.fsuper,
            Pilot_name: editableRow.pilotName,
            Crew_id: editableRow.crewId,
            Designation: editableRow.dest,
            Flight_Supervisor_id: editableRow.fSuperId,
            Pilot_id: editableRow.pilotId,
            Uin_DAN: editableRow.uin,
            Mobile_Number: editableRow.mobile,
            Authorized_By: editableRow.authBy,
          }, options
        ).then((response) => {
          console.log(response.data)
          setSaveBtn(!saveBtn)
          props.editData2();
          props.submitDate();
          alert("Details Updated");
        }).catch(err => {
            console.log(err)
        })
      }

    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-4 first">
                        <div className='fp-cd-flex'>
                            <b>District</b>
                            <span>: <input type="text" name='District' value={editableRow.District} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Crew Name</b>
                            <span>: <input type="text" name='crewName' value={editableRow.crewName} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Raider In-charge Name </b>
                            <span>: <input type="text" name='rIncharge' value={editableRow.rIncharge} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Flight Supervisor</b>
                            <span>: <input type="text" name='fsuper' value={editableRow.fsuper} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                    </div>
                    <div className="col-md-4 first">
                        <div className='fp-cd-flex'>
                            <b>Pilot Name</b>
                            <span>: <input type="text" name='pilotName' value={editableRow.pilotName} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Crew ID</b>
                            <span>: <input type="text" name='crewId' value={editableRow.crewId} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Designation</b>
                            <span>: <input type="text" name='dest' value={editableRow.dest} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Flight Supervisor ID</b>
                            <span>: <input type="text" name='fSuperId' value={editableRow.fSuperId} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                    </div>
                    <div className="col-md-4 first">
                        <div className='fp-cd-flex'>
                            <b>Pilot ID</b>
                            <span>: <input type="text" name='pilotId' value={editableRow.pilotId} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>UIN/DAN</b>
                            <span>: <input type="text" name='uin' value={editableRow.uin} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Mobile</b>
                            <span>: <input type="text" name='mobile' value={editableRow.mobile} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                        <div className='fp-cd-flex'>
                            <b>Authorized by</b>
                            <span>: <input type="text" name='authBy' value={editableRow.authBy} onChange={inputEvent} placeholder='Enter Text' required /></span>
                        </div>
                    </div>
                </div>
                {!saveBtn && <button className="btn btn-success" type='submit' onClick={onSubmit}>Save</button>}
            </form>
            
        </>
    )
}
