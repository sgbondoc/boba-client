import axios from 'axios'

const endPoint = `http://localhost:4000/api/v1`

class DrinkModel {
    static all = () => {
        let request = axios.get(`${endPoint}/drinks`);
        return request;
    };    
    
    static create = (drink) => {
        let request = axios.post(`${endPoint}/drinks`, drink)
        return request
    }

    static delete = (drink) => {
        let request = axios.delete(`${endPoint}/${drink._id}`)
        return request
    }

    static update = (drink) => {
        let request = axios.put(`${endPoint}/${drink._id}`, drink)
        return request
    }
};

export default DrinkModel;