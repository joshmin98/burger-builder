import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-aca5b.firebaseio.com/'
});

export default instance;
