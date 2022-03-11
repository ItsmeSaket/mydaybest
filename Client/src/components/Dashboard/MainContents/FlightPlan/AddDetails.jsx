import React from 'react';
import "./AddDetails.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const options = {
  headers: { "Content-Type": "multipart/form-data", 'x-auth-token': localStorage.getItem("token") }
}

export const AddDetails = () => {

  const [images, setImages] = useState([]);

  const userTemplate = {
    Flight_Log_NO: "",
    Drone_Id: "",
    Payload_Type: "",
    Take_Off_site: "",
    Operation_Start_Time: "",
    Operation_End_Time: "",
    Distance_Covered: "",
    Duration: "",
    Remarks: ""
  };

  const [users, setUsers] = useState([userTemplate])

  const myDuration = (index) => {
    const stTime = (users[index].Operation_Start_Time)
    const arrayStTime = stTime.split(":");
    var minStTime = (parseInt(arrayStTime[0], 10) * 60) + (parseInt(arrayStTime[1], 10))

    const enTime = (users[index].Operation_End_Time)
    const arrayEnTime = enTime.split(":");
    var minEnTime = (parseInt(arrayEnTime[0], 10) * 60) + (parseInt(arrayEnTime[1], 10))

    const durMin = (minEnTime - minStTime)
    if (durMin) {
      return (durMin + " Min")
    }
    else {
      return ("-")
    }
  }

  // add new row
  const addUser = () => {
    setUsers([...users, userTemplate])
  }


  const onChange = (e, index) => {
    const updatedUsers = users.map((user, i) => index === i
      ? Object.assign(user, { [e.target.name]: e.target.value })
      : user
    );
    setUsers(updatedUsers);
  }


  const imageHandler = (e) => {
    const multiple = e.target.files
    for(let i = 0; i < multiple.length; i++) {
      images.push(multiple[i])
    }
    setImages([images])
  }

  useEffect(() => {
    console.clear();
    images.length && console.log(images)
  },[images])

  const [data, setData] = useState({
    date: "",
    District: "",
    crewName: "",
    rIncharge: "",
    fSupervisor: "",
    pilotName: "",
    crewID: "",
    destination: "",
    fSuperID: "",
    pilotID: "",
    uin: "",
    mobileNum: "",
    authBy: ""
  })

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('User_Id', localStorage.getItem("User_Id"))
    formdata.append('Date', data.date)
    formdata.append("District", data.District)
    formdata.append('Crew_name', data.crewName)
    formdata.append('Raider_Incharge_name', data.rIncharge)
    formdata.append('Flight_Supervisor', data.fSupervisor)
    formdata.append('Pilot_name', data.pilotName)
    formdata.append('Crew_id', data.crewID)
    formdata.append('Designation', data.destination)
    formdata.append('Flight_Supervisor_id', data.fSuperID)
    formdata.append('Pilot_id', data.pilotID)
    formdata.append('Uin_DAN', data.uin)
    formdata.append('Mobile_Number', data.mobileNum)
    formdata.append('Authorized_By', data.authBy)
    formdata.append('Flight_Details', JSON.stringify(users));
    for(let i = 0; i<images.length; i++){
    images[i].forEach((file) => {
      formdata.append('files', file)
    });
  }
    axios.post("/operation_Log/Add_Details",
      formdata,
      options
    ).then((response) => {
      alert("Form Submitted");

    })
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className='fp-topbox'>
            <h4 className='fp-heading'>Operation Log for Bihar Excise</h4>
            <button className='logout-btn adetail-submit' type='submit'>Save</button>
          </div>

          <div className="fp-crewdata row">
            <h4 className='fp-heading'>Add Details</h4>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="date"
                  placeholder='Date'
                  className='adetail-input'
                  name="date"
                  value={data.date}
                  onChange={inputEvent}
                  required
                />
                <input
                  type="text"
                  placeholder='District'
                  className='adetail-input'
                  name="District"
                  value={data.District}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Crew Name'
                  className='adetail-input'
                  name="crewName"
                  value={data.crewName}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Raider In-charge Name '
                  className='adetail-input'
                  name="rIncharge"
                  value={data.rIncharge}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Flight Supervisor'
                  className='adetail-input'
                  name="fSupervisor"
                  value={data.fSupervisor}
                  onChange={inputEvent}
                  required
                />

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  placeholder='Pilot Name'
                  className='adetail-input'
                  name="pilotName"
                  value={data.pilotName}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Crew ID'
                  className='adetail-input'
                  name="crewID"
                  value={data.crewID}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Designation'
                  className='adetail-input'
                  name="destination"
                  value={data.destination}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Flight Supervisor ID'
                  className='adetail-input'
                  name="fSuperID"
                  value={data.fSuperID}
                  onChange={inputEvent}
                  required
                />

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  placeholder='Pilot ID'
                  className='adetail-input'
                  name="pilotID"
                  value={data.pilotID}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='UIN/DAN '
                  className='adetail-input'
                  name="uin"
                  value={data.uin}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Mobile Number'
                  className='adetail-input'
                  name="mobileNum"
                  value={data.mobileNum}
                  onChange={inputEvent}
                  required
                />

                <input
                  type="text"
                  placeholder='Authorized by'
                  className='adetail-input'
                  name="authBy"
                  value={data.authBy}
                  onChange={inputEvent}
                  required
                />

              </div>
            </div>
          </div>

          <div className='fplan-table'>
            <table className='fptable'>
              <thead>
                <tr className='table-head'>
                  <th className='start'>Flight Log No.</th>
                  <th>Drone ID</th>
                  <th>Payload Type</th>
                  <th>Take Off Site (Lat-Long)</th>
                  <th>Operation Start Time</th>
                  <th>Operation End Time</th>
                  <th>Distance Covered</th>
                  <th>Duration</th>
                  <th>Remarks</th>
                  <th className='end'>Attach File</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => (
                    <tr key={index}>
                      <td className='logno'><input className='tab-inp' type="text" name='Flight_Log_NO' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Drone_Id' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Payload_Type' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Take_Off_site' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="time" name='Operation_Start_Time' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="time" name='Operation_End_Time' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Distance_Covered' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Duration' value={myDuration(index)} onClick={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="text" name='Remarks' onChange={e => onChange(e, index)} required /></td>
                      <td><input className='tab-inp' type="file" name='Files' onChange={imageHandler} required multiple /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

            <button type="button" class="btn btn-primary me-3 m-5" onClick={addUser} ><b> Add More &#8897; </b></button>
          </div>
        </form>
      </div>
    </>
  )
}
