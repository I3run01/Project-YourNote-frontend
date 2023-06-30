import axios from "axios"

export class Auth {
    private apiLink: string
    
    constructor() {
        this.apiLink = 'https://yournoteapi.shop/api/users'
        // this.apiLink = 'http://localhost:4000/api/users'
    }

    async signUp(email: string, password: string): Promise<string> {
        let apiRoute = '/signup'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }))
            
            return JSON.stringify(response)
        } catch(error: any) {
            
            if(await error.response) throw error.response

            throw error
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

            if(await error.response) throw error.response

            throw error
        }
    }

    async user(): Promise<string> {
        try {
            let response = await axios.get(this.apiLink, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {
            if(await error.response) throw error.response

            throw error
        }
    }

    async googleSignIn(email: string): Promise<string> {
        let apiRoute = '/google-signin'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "googleToken": email,
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {

            if(await error.response) throw error.response

            throw error
        }
    }

    async confirmationEmail(token: string): Promise<string> {
        let apiRoute = `/confirm-email/${token}`

        try {
            let response = await axios.get(this.apiLink+apiRoute, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {

            if(await error.response) return JSON.stringify(await error.response)

            return JSON.stringify(error)
        }
    }

    async forgotPassword(email: string): Promise<string> {
        let apiRoute = '/forgot-password'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "email": email,
            }))

            return JSON.stringify(response)
        } catch(error: any) {

            if(await error.response) return JSON.stringify(await error.response)

            return JSON.stringify(error)
        }
    }

    async resetPassword(token: string, password: string): Promise<string> {
        let apiRoute = `/reset-password/${token}`

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "password": password
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error: any) {

            if(await error.response) return JSON.stringify(await error.response)

            return JSON.stringify(error)
        }
    }

}