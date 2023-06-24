import axios from "axios";

export class FilesRequest {
    private api: any;
    
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/api/files',
        });
    }

    async createFile(): Promise<string> {
        const apiRoute = '';

        try {
            const response = await this.api.post(apiRoute, new URLSearchParams(), {
                withCredentials: true
            });

            return JSON.stringify(response);
        } catch(error: any) {
            if(await error.response) return JSON.stringify(await error.response);
            return JSON.stringify(error);
        }
    }

    async updateTitle(fileID: string, title: string): Promise<string> {
        const apiRoute = `${fileID}/title`;

        try {
            const response = await this.api.put(apiRoute, new URLSearchParams({
                "title": title
            }), {
                withCredentials: true
            });

            return JSON.stringify(response);
        } catch(error: any) {
            if(await error.response) return JSON.stringify(await error.response);
            return JSON.stringify(error);
        }
    }

    async deleteFile(fileID: string): Promise<string> {
        const apiRoute = `${fileID}`;

        try {
            const response = await this.api.delete(apiRoute, {
                withCredentials: true
            });

            return JSON.stringify(response);
        } catch(error: any) {
            if(await error.response) return JSON.stringify(await error.response);
            return JSON.stringify(error);
        }
    }

    async retrieveFiles(): Promise<string> {
        const apiRoute = '';

        try {
            const response = await this.api.get(apiRoute, {
                withCredentials: true
            });

            return JSON.stringify(response);
        } catch(error: any) {
            if(await error.response) return JSON.stringify(await error.response);
            return JSON.stringify(error);
        }
    }
}
