const url = process.env.REACT_APP_API_URL || 'http://localhost:4000/api/v1'
// const url = 'http://localhost:4000/api/v1'

class RatingModel {
    static all = async () => {
        const response = await fetch(`${url}/ratings`)
        return await response.json()
    }

    static show = async (ratingId) => {
        const response = await fetch(`${url}/ratings/${ratingId}`)
        return await response.json()
    }
    
    static create = async (ratingData) => {
        const response = await fetch(`${url}/ratings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ratingData)
        })
        return await response.json()
    }

    static delete = async (ratingId) => {
        const response = await fetch(`${url}/ratings/${ratingId}`)
        return await response.json()
    }

    static update = async (ratingId, rating) => {
        const response = await fetch(`${url}/ratings/${ratingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rating)
        })
        return await response.json()
    }
}

export default RatingModel