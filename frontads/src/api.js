import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8000/ads/',
    baseURL: 'https://api.erociti.com/ads/',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});