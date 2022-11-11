import axios from "axios";

export const fetchAllRiders = async () =>{
    return await axios.get("http://localhost:8080/api/v1/riders")
}

export const getRiderById = async (id) =>{
    return await axios.get(`http://localhost:8080/api/v1/riders/${id}`)

}

export const createRider = async (rider) =>{
    return await axios.post("http://localhost:8080/api/v1/riders", rider)
}

export const updateRider = async (rider, id) => {
    return await axios.put(`http://localhost:8080/api/v1/riders/${id}`, rider)
}


export const deleteRider = async (id) =>{
    return await axios.delete(`http://localhost:8080/api/v1/riders/${id}`)
}

