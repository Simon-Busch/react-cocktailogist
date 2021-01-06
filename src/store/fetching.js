import axios from 'axios'

const fetch = () => {
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
      return cocktailArray
    })
    // .then(data => {
    //   console.log(data);
    // })
    .catch(error => {
      console.log(error)
    })
}

export default fetch