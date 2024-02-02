import axios from "axios";

function fetchCommandesUser(id){
    return axios.get('http://localhost:3000/api/commandes/'+ id)
}

export default{
    fetchCommandesUser,
}