import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export const Create = () => {

    const [rider, setRider] = useState({
        name:"",
        age:"",
        country:"",
        finalTime:"",
        mountainPoint:"",
        sprintPoint:"",
        team:{
            id:"",
            teamName:""
        }
    })

    const {name,age,country,finalTime,mountainPoint,sprintPoint,team} = rider;

    const onInputChange = (e) =>{
        setRider({...rider, [e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/riders", rider)
        console.log(rider)
    }

   return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Age
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="age"
                                value={age}
                                onChange={(e) =>onInputChange(e)}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                country
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="country"
                                value={country}
                                onChange={(e) =>onInputChange(e)}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="finalTime" className="form-label">
                                Final time
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="finalTime"
                                value={finalTime}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                mountain points
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="mountainPoint"
                                value={mountainPoint}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Sprint points
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="sprintPoint"
                                value={sprintPoint}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                team id
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="team.id"
                                value={team.id}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                teamName
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                id="teamName"
                                name="team.teamName"
                                value={team.teamName}
                                onChange={(e) =>onInputChange(e)}
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