import axios from 'axios'

const url = `http://localhost:4000/api/v1`

class DrinkModel {
    static all = () => {
        let request = axios.get(`${url}/drinks`)
        return request;
    };    
    
    static create = (drink) => {
        let request = axios.post(`${url}/drinks`, drink)
        return request
    }

    static delete = (drink) => {
        let request = axios.delete(`${url}/${drink._id}`)
        return request
    }

    static update = (drink) => {
        let request = axios.put(`${url}/${drink._id}`, drink)
        return request
    }
}

// class DrinkModel {
//     static all = () => {
//         return fetch(`${url}/drinks`)
//         .then(response => response.json())
//         .then (data => {
//             console.log(data)
//         })    
//         .catch(error => console.error(error))
//     }    

//     static show = (drinkId) => {
//         return fetch(`${url}/drinks/${drinkId}`)
//         .then(response => response.json())
//     }

//     static create = (drinkData) => {
//         return fetch(`${url}/drinks`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(drinkData)
//         })
//             .then(response => response.json())
//     }

//     static update = (drinkId) => {
//         return fetch(`${url}/drinks/${drinkId}`)
//         .then(response => response.json())
//     }
// }

export default DrinkModel