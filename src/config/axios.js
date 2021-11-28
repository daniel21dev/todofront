import axios from 'axios'


export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'x-token':  ''}
});

export const authAxios = (token) =>{
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: { 'x-token':  token}
    });
}