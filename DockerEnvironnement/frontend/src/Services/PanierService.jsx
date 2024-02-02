import axios from "axios";

function fetchPanier(id){
    return axios.get("http://localhost:3000/api/panier/"+id)
}

export default{
    fetchPanier,
}