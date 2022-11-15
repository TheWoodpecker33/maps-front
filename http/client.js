import axios from 'axios'

let APIKit = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 30000
})

export default APIKit;