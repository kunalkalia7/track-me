import axios from 'axios';
import { AsyncStorage } from 'react-native';

// let url;
// if (__DEV__){
//     url='http://9f5d2031d1c0.ngrok.io';
// }else{
//     url="https://desolate-meadow-86580.herokuapp.com";
// }

const instance= axios.create({
    baseURL: "https://desolate-meadow-86580.herokuapp.com"
});

instance.interceptors.request.use(
    async (config)=>{
        const token= await AsyncStorage.getItem("token");
        if (token){
          config.headers.Authorization= `Bearer ${token}`;
        }
        return config;
    },

    (err)=>{
        return Promise.reject(err);
    }
);

export default instance;