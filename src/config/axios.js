import axios from 'axios'

const token = localStorage.getItem('token') || ''

export default axios.create({
    baseURL: 'http://localhost/api/v1/',
    timeout: 1000,
    headers: { 'x-token':  token}
});