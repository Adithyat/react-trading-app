import axios from 'axios';

const getUserId = () => localStorage['userId'] || (localStorage['userId'] = 'Adithya' + new Date().getMilliseconds());

const instance = axios.create({
    baseURL: 'https://demomocktradingserver.azurewebsites.net/',
    headers: { userid: getUserId() }
});


export default instance;
export const axios_static = axios;