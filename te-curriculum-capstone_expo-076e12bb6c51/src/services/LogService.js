import axios from 'axios';

let path = process.env.VUE_APP_REMOTE_API;

export default {

    log(message) {
        return axios.post(path + '/log', message);
    },

    getSummary(location) {
        return axios.get(path + '/log/summary/' + location);
    }

}