import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(url);
}

const save = (nameObject) => {
    return axios.post(url, nameObject);
}

const deleteItem = (id) => {
    const newUrl = `http://localhost:3001/persons/${id}`;
    return axios.delete(newUrl, id);
}

const putNewNumbers = (id, newObject) => {
    const newUrl = `http://localhost:3001/persons/${id}`;
    return axios.put(newUrl, newObject);
}

export default {getAll, save, deleteItem, putNewNumbers};