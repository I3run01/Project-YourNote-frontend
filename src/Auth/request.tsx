import axios from "axios"

export const Auth = {
    apiLink: 'http://localhost:3000/api/users',

    signUp: async (email: string, password: string): Promise<string> => {
        let apiRoute = '/signup'

        try {
            let response = await axios.post(Auth.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }), {
                withCredentials: true,
            })

            console.log(response)

            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    },

    signIn: async (email: string, password: string): Promise<string> => {
        let apiRoute = '/signin'

        try {
            let response = await axios.post(Auth.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    },

    user: async (): Promise<string> => {
        try {
            let response = await axios.get(Auth.apiLink, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    },
}