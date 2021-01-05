import axios from 'axios'

const instance = axios.create({
  baseURL :'https://react-burger-app-c1f85-default-rtdb.firebaseio.com/'
})

export default instance

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita