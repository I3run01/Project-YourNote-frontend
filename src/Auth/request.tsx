import axios from "axios"

export const Auth = {
    apiLink: 'http://localhost:3000',

    signUp: async () => {
        let ApiRoute = '/register'

        const request = axios.post(this.apiLink)
    }
}