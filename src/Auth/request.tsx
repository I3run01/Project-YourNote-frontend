import axios from "axios"

export class Auth {
    private apiLink: string
    
    constructor() {
        this.apiLink = 'http:///localhost:4000/api/users'
    }

    async signUp(email: string, password: string): Promise<string> {
        let apiRoute = '/signup'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }), {
                withCredentials: true,
            })

            console.log(response)

            return JSON.stringify(response)
        } catch(error: any) {
            return JSON.stringify(await error.response)
        }
    }

    async signIn(email: string, password: string): Promise<string> {
        let apiRoute = '/signin'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }), {
                withCredentials: true
            })
            return JSON.stringify(response)
        } catch(error: any) {
            return JSON.stringify(await error.response)
        }
    }

    async user(): Promise<string> {
        try {
            let response = await axios.get(this.apiLink, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {
            return JSON.stringify(await error.response)
        }
    }

    async googleSignIn(email: string): Promise<string> {
        let apiRoute = '/googleSignin'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "googleToken": email,
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {
            return JSON.stringify(await error.response)
        }
    }

    async confirmationEmail(token: string): Promise<string> {
        let apiRoute = `/emailConfirmation/${token}`

        try {
            let response = await axios.get(this.apiLink+apiRoute, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {
            return JSON.stringify(await error.response)
        }
    }
}