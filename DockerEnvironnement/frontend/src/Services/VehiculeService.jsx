import axios from "axios";

function fetchVehicules(){
    return axios.get("http://localhost:3000/api/vehicules")
}

export default{
    fetchVehicules,
}