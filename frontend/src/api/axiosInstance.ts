import axios from "axios";

export const apiUrl = process.env.REACT_APP_API_URL;

export const customAxiosInstance = axios.create({
    baseURL: apiUrl
})

customAxiosInstance.interceptors.response.use(response => response.data);

const axiosInstance = {
    get: async <T>(url: string, params?: any): Promise<T> => customAxiosInstance.get(url, {params}),

    post: async <T = void>(url: string, payload?: any): Promise<T> => customAxiosInstance.post(url, payload)
}
export default axiosInstance