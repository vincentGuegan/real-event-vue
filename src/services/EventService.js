import axios from 'axios'

const apiClient = axios.create({ // a single Axios instance for our entire app
    baseURL: 'http://localhost:3000', // Base URLfor all calls to use
    withCredentials: false,
    headers: {
        Accept: 'application/json',         //for authentication...
        'Content-Type': 'application/json' //...& configuration
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}