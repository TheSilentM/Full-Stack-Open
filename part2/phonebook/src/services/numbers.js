import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(url);
}

const save = (nameObject) => {
    return axios.post(url, nameObject);
}

export default {getAll, save};