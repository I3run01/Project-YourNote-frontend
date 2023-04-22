import axios from "axios"

export const Auth = {
    apiLink: 'http://localhost:4000/api/users',

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

    googleSignIn: async (email: string): Promise<string> => {
        let apiRoute = '/googleSignin'

        try {
            let response = await axios.post(Auth.apiLink+apiRoute, new URLSearchParams({
                "email": email,
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    },
}