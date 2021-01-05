import React, { Component } from 'react';
// import axiosFireBase from '../../axios-cocktail';
import axios from 'axios'
import Cocktail from '../../components/cocktails/cocktail/cocktail';
import Button from '../../components/UI/button/button';
import CocktailContainer from '../../hoc/CocktailContainer';

class CocktailBuilder extends Component {
  state = {
    cocktails: []
  }

  fetchHandler = () => {
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
        this.setState({
          ...this.state,
          cocktails: cocktailArray
        })
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    let cocktailCont = null;
    // console.log(this.state.cocktails.length);
    if (this.state.cocktails.length > 0) {
      console.log(this.state.cocktails)
      cocktailCont = this.state.cocktails.map(cocktail => (
          <Cocktail
            key={cocktail.name}
            name={cocktail.name}
            picture={cocktail.picture}
            glass={cocktail.glass}
            instruction={cocktail.instruction}
            ingredients={cocktail.ingredient}
          />
      ))
    } else {
      cocktailCont = <p style={{color:'white'}}>please fetch cocktails</p>
    }

    return (
      <div>
        <Button text="Fetch Cocktails" clicked={this.fetchHandler}/>
        <CocktailContainer >
          {cocktailCont}
        </CocktailContainer>
      </div>
    );
  }
}

export default CocktailBuilder;
