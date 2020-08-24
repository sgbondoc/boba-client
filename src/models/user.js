const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class UserModel {
    static async create(data) {
        const response = await fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await response.json()
    }
    static async login(credentials) {
        // remember to add "credentials: include"
        const response = await fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentials)
         })
         return await response.json()
     }
}