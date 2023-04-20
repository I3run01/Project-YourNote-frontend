import axios from "axios"

export const Auth = {
    apiLink: 'http://localhost:3000',

    signUp: async (email: string, password: string) => {
        let apiRoute = '/register'

        return axios.post(Auth.apiLink+apiRoute, {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
    }
}