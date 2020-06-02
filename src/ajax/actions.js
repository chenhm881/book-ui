import axios from 'axios';

export function get(_t, args, callBack) {
    let params = args;
    let endpoint = "http://localhost:8080";
    axios.post(endpoint, params, {
        timeout: 86400000,
        cancelToken: _t.source.token
    })
        .then(response => {
            let data = response.data;

        }).catch(error => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                console.log(error);
            }
            if (error && error.stack && error.message.length > -1) {
                callBack([], 'REJECT', error.message,);
            }
        });
}
