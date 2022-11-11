import {useState} from "react";
import {createRider} from "../Queries";
import {Link, useNavigate} from "react-router-dom";

export const Create = () => {
    const [rider, setRider] = useState({
        name:"",
        finalTime:"",
        mountainPoint:"",
        sprintPoint:"",
    })

    let navigate = useNavigate();

    const { name, finalTime, mountainPoint, sprintPoint } = rider;

    const onInputChange = (e) => {
        setRider({ ...rider, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
       await createRider(rider)
        navigate("/");
    }



   return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

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