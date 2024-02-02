import axios from "axios";

function fetchVehicules(){
    return axios.get("http://localhost:3000/api/vehicules")
}

function fetchVehiculesCommandes(id){
    return axios.get('http://localhost:3000/api/vehicules/${id}')
}

export default{
    fetchVehicules,fetchVehiculesCommandes,
}