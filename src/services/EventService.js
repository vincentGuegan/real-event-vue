import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({ // a single Axios instance for our entire app
    baseURL: 'http://localhost:3000', // Base URLfor all calls to use
    withCredentials: false,
    headers: {
        Accept: 'application/json',         //for authentication...
        'Content-Type': 'application/json' //...& configuration
    },
    timeout: 10000 // Throw error if API call takes longer than 10 seconds
})

apiClient.interceptors.request.use(config => {
    NProgress.start()
    return config
})

apiClient.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default {
    getEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
      },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    },
    postEvent(event) {
        return apiClient.post('/events/', event)
    }
}