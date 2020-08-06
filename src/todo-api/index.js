import axios from 'axios'
import store from '../store'

const todoApi = axios.create({
    baseURL: 'https://5f29621aa1b6bf0016ead582.mockapi.io/todos',
})

todoApi.interceptors.request.use(req => {
    store.dispatch({type: "LOADING", payload: {loading: true}})
    return req;
 }, error => error
)

todoApi.interceptors.response.use(res => {
    store.dispatch({type: "LOADING", payload: {loading: false}})
    return res;
 }, error => error
)


export default todoApi;