import axios from 'axios';
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';

export const fetchedCocktails = (response ) => {
  return {
    type: FETCH_COCKTAILS,
    cocktails: response
  }
}

export const fetchCocktails = (ingredient) => {
  return (dispatch) => {
    const cocktailArray = []
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`)
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
      let cocktailsArrayFinal = Object.keys(cocktailArray)
        .map(cocktailKey => {
            return [...Array(cocktailArray[cocktailKey])]
        })
      dispatch(fetchedCocktails(cocktailsArrayFinal.flat()))
    })
    .catch(error => {
      console.log(error)
    })
  }
}
