import axios from 'axios'

const instance = axios.create({
  baseURL :'https://cocktail-react-default-rtdb.firebaseio.com/'
})

export default instance