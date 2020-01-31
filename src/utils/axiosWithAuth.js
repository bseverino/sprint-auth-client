import axios from 'axios'

export function axiosWithAuth() {
    const token = sessionStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:3300/api',
        headers: {
            authorization: token,
            'Access-Control-Allow-Origin': '*'
        }
    })
}
