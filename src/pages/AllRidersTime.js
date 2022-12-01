import {useQuery} from "react-query";
import {sortedList} from "../Queries";
import Table from "react-bootstrap/Table";


export const AllRidersTime = () =>{
    const {data,isLoading, isError} = useQuery("riders", sortedList);

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
                            <tr key={rider.id}>
                                <td>{rider.id}</td>
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