import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8000/ads/',
    baseURL: 'https://api.erociti.com/ads/',
    headers: {
        'Content-Type': 'application/json',
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});