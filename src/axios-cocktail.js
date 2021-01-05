import axios from 'axios'

const instance = axios.create({
  baseURL :'https://cocktail-react-default-rtdb.firebaseio.com/'
})

export default instance

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita