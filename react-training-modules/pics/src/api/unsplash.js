import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 012ccc7c3102284710d9434e1c43a400b8cde8b483800ad5d094383a6fdb0727'
    }
})