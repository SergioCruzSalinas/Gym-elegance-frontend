import axios from 'axios';


const GymApi = axios.create({
    baseURL: import.meta.env.VITE_GYM_API_URL,
});

GymApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})


export { GymApi };





