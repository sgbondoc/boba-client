const url = 'http://localhost:4000/api/v1'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

class RatingModel {
    static all = () => {
        return fetch(`${url}/ratings`)
        .then(response => response.json())
    }

    static show = (ratingId) => {
        return fetch(`${url}/ratings/${ratingId}`)
        .then(response => response.json())
    }
    
    static create = (ratingData) => {
        return fetch(`${url}/ratings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ratingData)
        })
            .then(response => response.json())
    }
    static update = (ratingId) => {
        return fetch(`${url}/ratings/${ratingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ratingId)
        })
            .then(response => response.json())
    }
}

export default RatingModel