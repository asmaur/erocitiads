import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api/v1/ads/',
    headers: {
        'Content-Type': 'application/json',
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});