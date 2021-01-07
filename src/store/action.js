import axios from 'axios';
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const TEST = 'TEST';


export const test = () => {
  return {
    type: TEST
  }
}

export const fetchedCocktails = () => {
  return {
    type: FETCH_COCKTAILS
  }
}

export const fetchCocktails = () => {
  return (dispatch) => {
    console.log('coucou fetching');
    const cocktailArray = []
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail')
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
    })
    .catch(error => {
      console.log(error)
    })
    return () => {
      dispatch(fetchedCocktails)
    }
  }
}

// export const fetchCocktails = (ingredient) => {
//   return (dispatch) => {
//     console.log('coucou fetching')
//     const fetchHandler = () => {
//       // const searchedKeyword = 'cocktail' 
//       const cocktailArray = []
//       axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`)
//         .then(response => {
//           // console.log(response)
//           response.data.drinks.forEach(cocktail => {
//             console.log(cocktail)
//             cocktailArray.push({
//               id: cocktail.idDrink, 
//               name: cocktail.strDrink,
//               picture: cocktail.strDrinkThumb,
//               glass: cocktail.strGlass,
//               instruction: cocktail.strInstructions,
//               ingredient: {
//                 firstIng: cocktail.strIngredient1,
//                 secondIng: cocktail.strIngredient2,
//                 thirdIng: cocktail.strIngredient3,
//                 fourthIng: cocktail.strIngredient4
//               }
//             })
//           })
//           console.log(cocktailArray)
//           dispatch(fetchedCocktails)
//           // return cocktailArray
//         })
//         .catch(error => {
//           console.log(error)
//         })
//       }
//     console.log(fetchHandler())
//   }
// }
