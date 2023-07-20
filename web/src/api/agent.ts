import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
const apiUrl = 'http://127.0.0.1:4001/api';

const handleError = (error: AxiosError, errorCallback?: any) => {
  if (errorCallback) {
    errorCallback(error);
    return;
  }

  if (error.response) {
    const resp: any = error.response;
    toast.error(resp.data);
  } else {
    toast.error('Unknown Error');
  }
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

  if (response) return response.data;
  else return null;
};

export { apiPost, apiGet, setAuthHeader, apiPut };
