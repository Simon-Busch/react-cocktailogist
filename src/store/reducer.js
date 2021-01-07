import * as actionType from './action';
import axios from 'axios';
import fetch from './fetching';



const initialState = {
  cocktails: [
    {
      id: "12418", 
      name: "Turf Cocktail",
      picture: "https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg",
      glass: "Cocktail glass",
      instruction: "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      ingredient: {
        firstIng: "Dry Vermouth",
        secondIng: "Bitters",
        thirdIng: "Gin",
        fourthIng: "Anis"
      }
    }
  ],
  buttonShow: true
} 


const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionType.FETCH_COCKTAILS:
      console.log('coucou fetching')
      const cocktailArray = []
      const fetchHandler = () => {
        // const searchedKeyword = 'cocktail'
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s='cocktail'`)
          .then(response => {
            response.data.drinks.forEach(cocktail => {
              console.log(cocktail)
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
          })      
          .catch(error => {
            console.log(error)
          })
          console.log(cocktailArray)
        }
        
      const newState = Object.keys(cocktailArray)
      return {
        ...state,
        cocktails: newState
      }
    case actionType.TEST:
      console.log('coucou')
      return state
    default:
      return state
  }
}

export default reducer;
