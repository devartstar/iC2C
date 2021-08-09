import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instance.default.headers.common['Authorization']='AUTH TOKEN FROM INSTANCE';

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instance.default.headers.common['Authorization']='AUTH TOKEN FROM INSTANCE';

export default instance;
