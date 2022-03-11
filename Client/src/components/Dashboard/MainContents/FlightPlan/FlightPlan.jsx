import React, { useState, Fragment } from 'react'
import "./FlightPlan.css"
import { Link } from 'react-router-dom'

// images
import edit from "../../../images/Edit.png"
import add from "../../../images/Add.png"
import axios from 'axios'
import { ReadOnlyRow } from './Comp/ReadOnlyRow'
import { EditableRow } from './Comp/EditableRow'


export const FlightPlan = () => {

    const [date, setDate] = useState()
    const [allDetails, setAllDetails] = useState();

    const [District, setDistrict] = useState("")
    const [crewName, setCrewName] = useState("")
    const [rIncharge, setRIncharge] = useState("")
    const [fsuper, setFsuper] = useState("")
    const [pilotName, setPilotName] = useState("")
    const [crewId, setCrewId] = useState("")
    const [dest, setDest] = useState("")
    const [fSuperId, setFSuperId] = useState("")
    const [pilotId, setPilotId] = useState("")
    const [uin, setUin] = useState("")
    const [mobile, setMobile] = useState("")
    const [authBy, setauthBy] = useState("")

    const [dataEdit, setDataEdit] = useState(false)

    const [fLog, setFlog] = useState()

    const [fLog2, setFlog2] = useState()

    const [resImage, setResImage] = useState("")

    const editData = () => {
        setDataEdit(true)
    }

    const editData2 = () => {
        setDataEdit(!dataEdit)
    }

    const options = {
        headers: { "Content-Type": "application/json", 'x-auth-token': localStorage.getItem("token") }
    }
    // console.log(header)
    const onChange = (e) => {
        setDate(e.target.value)
    }

    const getRowData = (index) => {
        console.log("CLicked")
        const abc = fLog.find((item) => {
            return item.Flight_Log_NO === index
        })
        console.log(abc.Flight_Log_NO)
        setFlog2(abc.Flight_Log_NO)

        axios.post('/operation_Log/Find_Row', {
            "User_Id": localStorage.getItem("User_Id"),
            "Date": date,
            "Log_No": fLog2
        }, options)
            .then((response) => {
                setResImage(response.data.RowData.Image)
            })
            .catch((error) => {
                console.log(error)
            });

    }


    const submitDate = () => {
        axios.post('/operation_Log/Find_Details', {
            "Date": date,
            "User_Id": localStorage.getItem("User_Id")
        }, options)
            .then((response) => {
                setAllDetails(response.data)
                setFlog(response.data.Flight_Details)
                setDistrict(response.data.District)
                setCrewName(response.data.Crew_name)
                setRIncharge(response.data.Raider_Incharge_name)
                setFsuper(response.data.Flight_Supervisor)
                setPilotName(response.data.Pilot_name)
                setCrewId(response.data.Crew_id)
                setDest(response.data.Designation)
                setFSuperId(response.data.Flight_Supervisor_id)
                setPilotId(response.data.Pilot_id)
                setUin(response.data.Uin_DAN)
                setMobile(response.data.Mobile_Number)
                setauthBy(response.data.Authorized_By)
                console.log(response.data)
            })
            .catch((error) => {
                // console.log(error)
                console.log("Data Not found for Particular Date. Please Select Valid date")
            });
    }

    // console.log(date)
    // console.log(allDetails)

    return (
        <>
            <div className='fp-topbox'>
                <div>
                    <h4 className='fp-heading'>Operation Log for Bihar Excise</h4>
                </div>
                <div className='my-flex'>
                    <button className='my-flex' onClick={editData}>
                        <img className='editimg' src={edit} alt="" />
                        <p>Edit Detail</p>
                    </button>
                    <Link className='my-flex' to="/flightplan/adddetails">
                        <img className='editimg' src={add} alt="" />
                        <p>Add Detail</p>
                    </Link>
                </div>
            </div>
            <div className="fp-crewdata row">
                <div className='fp-cd-flex mydate'>
                    <input type="date" data-date-inline-picker="true" name="myDate" onChange={onChange} onSelect={submitDate} />
                </div>


                <Fragment>
                    {
                        dataEdit ?
                            <EditableRow
                                date={date}
                                District={District}
                                crewName={crewName}
                                rIncharge={rIncharge}
                                fsuper={fsuper}
                                pilotName={pilotName}
                                crewId={crewId}
                                dest={dest}
                                fSuperId={fSuperId}
                                pilotId={pilotId}
                                uin={uin}
                                mobile={mobile}
                                authBy={authBy}
                                editData2={editData2}
                                submitDate={submitDate}
                            />

                            : <ReadOnlyRow
                                District={District}
                                crewName={crewName}
                                rIncharge={rIncharge}
                                fsuper={fsuper}
                                pilotName={pilotName}
                                crewId={crewId}
                                dest={dest}
                                fSuperId={fSuperId}
                                pilotId={pilotId}
                                uin={uin}
                                mobile={mobile}
                                authBy={authBy}
                            />
                    }

                </Fragment>

            </div>

            <div className='fplan-table'>
                <table className='fptable'>
                    <thead>
                        <tr className='table-head'>
                            <th className='start'>Flight Log No.</th>
                            <th>Drone ID</th>
                            <th>Payload Type</th>
                            <th>Take Off Site (Lat- Long)</th>
                            <th>Operation Start Time</th>
                            <th>Operation End Time</th>
                            <th>Distance Covered</th>
                            <th>Duration </th>
                            <th>Remarks</th>
                            {<th className='end'>Attached File</th>}
                        </tr>
                    </thead>
                    {allDetails &&
                        <tbody>
                            {
                                allDetails.Flight_Details.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className='logno'>{val.Flight_Log_NO}</td>
                                            <td>{val.Drone_Id}</td>
                                            <td>{val.Payload_Type}</td>
                                            <td>{val.Take_Off_site}</td>
                                            <td>{val.Operation_Start_Time}</td>
                                            <td>{val.Operation_End_Time} </td>
                                            <td>{val.Distance_Covered} </td>
                                            <td>{val.Duration} </td>
                                            <td>{val.Remarks} </td>
                                            <td id="img" onClick={() => getRowData(val.Flight_Log_NO)}><a href='#' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Click here</a></td>

                                            {/* <!-- Modal --> */}
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">

                                                            {/* carousel  */}
                                                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img src={resImage[0]} class="d-block w-100" alt="..." />
                                                                    </div>
                                                                    {resImage && resImage.slice(1).map((i) => {
                                                                        return (
                                                                            <div class="carousel-item">
                                                                                <img src={i} class="d-block w-100" alt="..." />
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Previous</span>
                                                                </button>
                                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Next</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
        </>
    )
}
