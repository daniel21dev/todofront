import axios from 'axios'


export default axios.create({
    baseURL: `http://localhost:8080/api/v1/`,
    headers: { 'x-token':  ''}
});

export const authAxios = (token) =>{
    return axios.create({
        baseURL: `http://localhost:8080/api/v1/`,
        headers: { 'x-token':  token}
    });
}