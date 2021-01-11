import axios from 'axios';
import axiosFireBase from '../../axios-cocktail';
import * as actions from './actions';
import toast, { Toaster } from 'react-hot-toast';

//sync
export const fetchedCocktails = (response) => {
  return {
    type: actions.FETCH_COCKTAILS,
    cocktails: response
  }
}

//async
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

//sync
export const postedCocktails = () => {
  return {
    type: actions.POST_COCKTAILS
  }
}

//async
export const postCocktails = () => {
  return (dispatch, getState) => {
    const state = getState().cocktails

    axiosFireBase.post('/cocktails.json', state)
      .then(response => dispatch(postedCocktails()))
      .catch(error => console.log(error))
  }
}

//sync
export const fetchedCocktail = (response) => {
  return {
    type: actions.FETCH_ONE_COCKTAIL,
    cocktail: response
  }
}

//async
export const fetchOneCocktail = (id) => {
  return (dispatch) => {
    const cocktailArray = []
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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



// EXPORT POST COCKTAIL FUNCTION
//sync
export const savedCocktail = () => {
  return {
    type: actions.SAVE_COCKTAIL
  }
}

//async
export const saveCocktail = (cocktail) => {
  return (dispatch) => {

    axiosFireBase.post('/saved-cocktails.json', cocktail)
      .then(response => dispatch(savedCocktail()))
      .catch(error => console.log(error))
  }
}


// ADD FECTCHING FAVORITE COCKTAILS ON LOADING
export const fetchedSavedCocktails = (response) => {
  return {
    type: actions.FETCH_SAVED_COCKTAILS,
    savedCocktails: response
  }
}

export const fetchSavedCocktails = () => {
  return (dispatch) => {
    const cocktailArray = []
    axiosFireBase.get('/saved-cocktails.json')
    .then(response => {
      response.data.drinks.forEach(cocktail => {
        cocktailArray.push(cocktail)
      })
      let cocktailsArrayFinal = Object.keys(cocktailArray)
        .map(cocktailKey => {
            return [...Array(cocktailArray[cocktailKey])]
        })
      dispatch(fetchedSavedCocktails(cocktailsArrayFinal.flat()))
      
    })
    .catch(error => {
      console.log(error)
    })
  }
}