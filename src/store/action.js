import axios from 'axios';

export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const TEST = 'TEST';

export const test = () => {
  return {
    type: TEST
  }
}

export const fetchedCocktails = (response ) => {
  // console.log(response)
  // array of objects
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
        // console.log(cocktail)
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
      // console.log(Object.keys(cocktailArray))
      let cocktailsArrayFinal = Object.keys(cocktailArray)
        .map(cocktailKey => {
            return [...Array(cocktailArray[cocktailKey])]
        })
        // .flat()
      // console.log(cocktailsArrayFinal)
      //array of cocktails object
      dispatch(fetchedCocktails(cocktailsArrayFinal.flat()))
    })
    .catch(error => {
      console.log(error)
    })
  }
}
