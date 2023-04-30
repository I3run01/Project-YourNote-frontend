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
        } catch(error) {
            return JSON.stringify(error)
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
        } catch(error) {
            return JSON.stringify(error)
        }
    }

    async user(): Promise<string> {
        try {
            let response = await axios.get(this.apiLink, {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    }

    async googleSignIn(email: string, name:string, picture:string): Promise<string> {
        let apiRoute = '/googleSignin'

        try {
            let response = await axios.post(this.apiLink+apiRoute, new URLSearchParams({
                "email": email,
                "name": name,
                "picture": picture,
            }), {
                withCredentials: true
            })
            
            return JSON.stringify(response)
        } catch(error) {
            return JSON.stringify(error)
        }
    }
}