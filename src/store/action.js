export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const TEST = 'TEST';


export const fetchedCocktails = () => {
  return {
    type: FETCH_COCKTAILS
  }
}


export const fetchCocktails = () => {
  return {
    type: FETCH_COCKTAILS
  }
}


// console.log('coucou fetching')
// const fetchHandler = () => {
//   // const searchedKeyword = 'cocktail'
//   const cocktailArray = []
//   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail`)
//     .then(response => {
//       // console.log(response)
//       response.data.drinks.forEach(cocktail => {
//         console.log(cocktail)
//         cocktailArray.push({
//           id: cocktail.idDrink, 
//           name: cocktail.strDrink,
//           picture: cocktail.strDrinkThumb,
//           glass: cocktail.strGlass,
//           instruction: cocktail.strInstructions,
//           ingredient: {
//             firstIng: cocktail.strIngredient1,
//             secondIng: cocktail.strIngredient2,
//             thirdIng: cocktail.strIngredient3,
//             fourthIng: cocktail.strIngredient4
//           }
//         })
//       })
//       console.log(cocktailArray)
//       return {
//         ...state,
//         cocktails: cocktailArray
//       }
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// console.log(fetchHandler())