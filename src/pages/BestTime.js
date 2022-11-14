import {useQuery} from "react-query";
import {bestFinalTime} from "../Queries";
import Table from "react-bootstrap/Table";


export const BestTime = () =>{
    const {data,isLoading, isError} = useQuery("riders", bestFinalTime);

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.data.map((rider) => (
                            <tr>
                                <td key={rider.id}>{rider.id}</td>
                                <td>{rider.name}</td>
                                <td>{rider.finalTime}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>

    )

}