import Table from 'react-bootstrap/Table';
import {deleteRider} from "../Queries";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {
   const[riders, setRiders] = useState([]);

   useEffect(() => {
loadRiders();
   },[])

    const loadRiders = async () =>{
       const result = await axios.get("http://localhost:8080/api/v1/riders")
       setRiders(result.data)
       console.log(result)
    }

const deleteRiderSubmit = (id) =>{
        deleteRider(id).then(() =>  window.location.reload());
    }

    return (
        <div className={"container"}>
            <div className='py-4'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>final time</th>
                        <th>mountain points</th>
                        <th>Sprint points</th>
                        <th>Team id</th>
                        <th>Team name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(riders?.map((rider) => (
                            <tr key={rider.id}>

                                <td> {rider.id} </td>
                                <td>{rider.name}</td>
                                <td>{rider.age}</td>
                                <td>{rider.country}</td>
                                <td>{rider.finalTime}</td>
                                <td>{rider.mountainPoint}</td>
                                <td>{rider.sprintPoint}</td>
                                <td>{rider.team.id}</td>
                                <td>{rider.team.teamName}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/edit/${rider.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <Button onClick={() => deleteRiderSubmit(rider.id)}>Delete</Button>
                                </td>
                            </tr>

                        )))}
                    </tbody>
                </Table>

            </div>
        </div>
    )

}