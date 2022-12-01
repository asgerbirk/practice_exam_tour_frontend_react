import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getRiderById, updateRider} from "../Queries";

export const Edit = () => {
    const [rider, setRider] = useState({
        name:"",
        age:"",
        finalTime:"",
        mountainPoint:"",
        sprintPoint:"",
    })

    let navigate = useNavigate();

    const {id} = useParams();

    const { name, age, finalTime, mountainPoint, sprintPoint } = rider;

    const onInputChange = (e) => {
        setRider({ ...rider, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadRider().then(() => console.log(rider))
    },[]);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await updateRider(rider, id)
        navigate("/");
    }

    const loadRider = async () => {
        const result = await getRiderById(id);
        setRider(result.data);
    };





    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter your age"
                                name="age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="finalTime" className="form-label">
                                Final time
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="finalTime"
                                name="finalTime"
                                value={finalTime}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                mountain points
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="mountain Points"
                                name="mountainPoint"
                                value={mountainPoint}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Sprint points
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="sprint points"
                                name="sprintPoint"
                                value={sprintPoint}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}