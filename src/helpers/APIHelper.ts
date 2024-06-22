import { isInternetConnected } from "./CommonHelper";
// import {API_BASE_URL_V1} from '@env'

let commonHeaderConfig = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // Add any other headers you might need, such as authorization headers
};

export const postApi = async (endpoint: string, data: any) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: {...commonHeaderConfig},
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error creating data : '+error };
    }
};

export const postFormDataApi = async (endpoint: string, data: any) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: {'Content-Type':'multipart/form-data'},
                body: data,
            });
            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error creating data : '+error };
    }
};

export const getApi = async (endpoint: string) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'GET',
                headers: { ...commonHeaderConfig },
            });

            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error reading data : '+error };
    }
};

export const putApi = async (endpoint: string, data: any) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'PUT',
                headers: { ...commonHeaderConfig },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error updating data : '+error };
    }
};

export const patchApi = async (endpoint: string, data: any) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'PATCH',
                headers: { ...commonHeaderConfig },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error updating data : '+error };
    }
};

export const deleteApi = async (endpoint: string) => {
    try {
        let connection : any = await isInternetConnected();
        if(connection){
            const response = await fetch(`${endpoint}`, {
                method: 'DELETE',
                headers: { ...commonHeaderConfig },
            });

            const result = await response.json();
            return result;
        }else{
            return { status: 400, message: 'Network Issue, Internet is not Connected' }
        }
    } catch (error) {
        return { success: false, error: 'Error deleting data : '+error };
    }
};