export type userTypeConectionError = {
    message: string
    status: number
}

export type userTypeIsOK = {
    status: number
    data: {
        _id: string
        avatarImage: string
        email: string
        name:string
        status: 'Active' | 'Pending'
    }
}

export type userType = userTypeIsOK | userTypeConectionError