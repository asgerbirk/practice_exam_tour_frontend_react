import {useState} from "react";
import {createRider} from "../Queries";
import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";

export const Create = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [finalTime, setFinalTime] = useState("");
    const [mountainPoint, SetMountainPoint] = useState("");
    const [sprintPoint, setSprintPoint] = useState("");

    const queryClient = useQueryClient();
    let navigate = useNavigate();


    const {mutate, isError, isLoading,reset} = useMutation(createRider,{
        onSuccess: () => {
            queryClient.invalidateQueries("riders");
        }
    });

    if (isError){
        return <p>Error</p>
    }

    if (isLoading){
        return  <p>is loading</p>

    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        mutate({name,age,finalTime,mountainPoint,sprintPoint})
        navigate("/")
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
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setAge(e.target.value)}
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
                                onChange={(e) => setFinalTime(e.target.value)}
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
                                onChange={(e) => SetMountainPoint(e.target.value)}
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
                                onChange={(e) => setSprintPoint(e.target.value)}
                            />
                        </div>
                        <button onClick={reset} type="submit" className="btn btn-outline-primary">
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