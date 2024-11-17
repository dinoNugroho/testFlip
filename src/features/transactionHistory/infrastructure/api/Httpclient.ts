import axios from "axios";

interface IHttpClient {
    cached?: boolean;
    baseUrl?: string;
}
const URL = "https://recruitment-test.flip.id/"
export const httpClient = (params?: IHttpClient) => {
    const { baseUrl = URL } = params || {}

    const axiosInstance = axios.create({
        baseURL: baseUrl
    });

    return { axiosInstance }
}

export default httpClient;