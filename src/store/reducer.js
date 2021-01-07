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
      return state;
    case actionType.TEST:
      console.log('coucou')
      return state;
    default:
      return state;
  }
}

export default reducer;
