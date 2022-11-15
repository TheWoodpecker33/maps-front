import axios from 'axios'

let APIKit = axios.create({
    baseURL: "http://192.168.1.69:3000",
    timeout: 30000
})

export default APIKit;