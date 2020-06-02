import axios from 'axios';
import { getEnv } from './../utils/methods';

axios.interceptors.request.use(
    config => {
        // change url accordding to env
        config.url = config.url.replace('$env$', getEnv);

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

