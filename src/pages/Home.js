import Table from 'react-bootstrap/Table';
import {deleteRider, fetchAllRiders} from "../Queries";
import {useQuery} from 'react-query';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Home = () => {

    const {data,isLoading, isError} = useQuery("beers", fetchAllRiders);

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
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
                        <th>final time</th>
                        <th>mountain points</th>
                        <th>Sprint points</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.data.map((rider) => (
                            <tr>
                                <td key={rider.id}>{rider.id}</td>
                                <td>{rider.name}</td>
                                <td>{rider.finalTime}</td>
                                <td>{rider.mountainPoint}</td>
                                <td>{rider.sprintPoint}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/edit/${rider.id}`}>Edit</Link>



                                </td>
                                <td>
                                    <Button onClick={() => deleteRiderSubmit(rider.id)}>Delete</Button>
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </Table>

            </div>
        </div>
    )

}