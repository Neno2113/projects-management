import axios from "axios"


const baseURL = import.meta.env.VITE_BASEURL;



const projectApi = axios.create({ baseURL });


projectApi.interceptors.request.use(
    async ( config ) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers!['x-token'] = token;
        }

        return config;
    }
)


export default projectApi;