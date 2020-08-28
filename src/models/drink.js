// import axios from 'axios'

// const url = `http://localhost:4000/api/v1`

// class DrinkModel {
//     static all = () => {
//         let request = axios.get(`${url}/drinks`)
//         return request;
//     };    
    
//     static create = (drink) => {
//         let request = axios.post(`${url}/drinks`, drink)
//         return request
//     }

//     static delete = (drink) => {
//         let request = axios.delete(`${url}/${drink._id}`)
//         return request
//     }

//     static update = (drink) => {
//         let request = axios.put(`${url}/${drink._id}`, drink)
//         return request
//     }
// }

const url = 'http://localhost:4000/api/v1'

class DrinkModel {
    static all = async () => {
        const response = await fetch(`${url}/drinks`)
        return await response.json()
    }

    static show = async (drinkId) => {
        const response = await fetch(`${url}/drinks/${drinkId}`)
        return await response.json()
    }
    
    static create = async (drinkData) => {
        const response = await fetch(`${url}/drinks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drinkData)
        })
        return await response.json()
    }

    static update = async (drinkId, drink) => {
        const response = await fetch(`${url}/drinks/${drinkId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drink)
        })
        return await response.json()
    }
}

export default DrinkModel