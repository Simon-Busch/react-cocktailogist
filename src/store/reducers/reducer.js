import * as actionType from '../actions/actions';

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
  cocktail: [],
  savedCocktails: []
} 

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionType.FETCH_COCKTAILS:
      return {
        ...state,
        cocktails: action.cocktails
      };
      case actionType.FETCH_ONE_COCKTAIL:
        return {
          ...state,
          cocktail: action.cocktail
        };
    case actionType.POST_COCKTAILS:
      return {
        ...state
      }
    case actionType.SAVE_COCKTAIL:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default reducer;
