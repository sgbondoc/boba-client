const url = process.env.REACT_APP_API_URL || 'http://localhost:4000/api/v1'
// const url = 'http://localhost:4000/api/v1'

export default class UserModel {
    static async create(data) {
        const response = await fetch(`${url}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await response.json()
    }
    static async login(credentials) {
        const response = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentials)
         })
         return await response.json()
    }
    static async logout() {
        const response = await fetch(`${url}/auth/logout`, {
                method: "DELETE",
                credentials: "include",
        })
        return await response.json()
    }

    static show = async (userId) => {
        const response = await fetch(`${url}/auth/${userId}`)
        return await response.json()
    }

    static update = async (userId, user) => {
        const response = await fetch(`${url}/auth/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    }
}