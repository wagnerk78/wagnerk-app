import axios from 'axios'


const api = axios.create({
    baseURL: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
})


export default api