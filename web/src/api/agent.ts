import axios, { AxiosError } from 'axios';
const apiUrl = 'http://127.0.0.1:4001/api';

const handleError = (error: AxiosError, errorCallback?: any) => {
    if (errorCallback) {
        errorCallback(error);
        return;
    }

    console.log('catch axios error');

    if (error.response) alert(error.response.data);
    else alert('Unknown Error');
};

const setAuthHeader = (value: string | null) => {
    value
        ? (axios.defaults.headers.common['Authorization'] = `Bearer ${value}`)
        : delete axios.defaults.headers.common['Authorization'];
};

const apiPost = async (url: string, data: any) => {
    const response: any = await axios
        .post(`${apiUrl}${url}`, data)
        .catch(handleError);

    return response.data;
};

const apiPut = async (url: string, data: any) => {
    const response: any = await axios
        .put(`${apiUrl}${url}`, data)
        .catch(handleError);

    return response.data;
};

const apiGet = async (url: string) => {
    const response: any = await axios.get(`${apiUrl}${url}`).catch(handleError);
    return response.data;
};

export { apiPost, apiGet, setAuthHeader, apiPut };