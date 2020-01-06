import axios from 'axios'

const api = axios.create({
    baseURL: 'https://notable-note-api.herokuapp.com/api'
})

export default api