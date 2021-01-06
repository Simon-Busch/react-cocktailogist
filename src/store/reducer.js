import * as actionType from './action';
import axios from 'axios';
// import fetch from './fetching';

const initialState = {
  cocktails: [],
  buttonShow: true
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionType.FETCH_COCKTAILS:
      
      const searchedKeyword = 'cocktail'
      const cocktailArray = []
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedKeyword}`)
        .then(response => {
          response.data.drinks.forEach(cocktail => {
            cocktailArray.push({
              id: cocktail.idDrink, 
              name: cocktail.strDrink,
              picture: cocktail.strDrinkThumb,
              glass: cocktail.strGlass,
              instruction: cocktail.strInstructions,
              ingredient: {
                firstIng: cocktail.strIngredient1,
                secondIng: cocktail.strIngredient2,
                thirdIng: cocktail.strIngredient3,
                fourthIng: cocktail.strIngredient4
              }
            })
          })
          return {
            ...state,
            cocktails: cocktailArray,
            buttonShow: false
          }
        })
        .catch(error => {
          console.log(error)
        })

      break;
    default:
      return state;
  }
}

export default reducer;