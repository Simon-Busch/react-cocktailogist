import React, { Component } from 'react';
// import axiosFireBase from '../../axios-cocktail';
import axios from 'axios'
import Cocktail from '../../components/cocktails/cocktail/cocktail';
import Button from '../../components/UI/button/button';

class CocktailBuilder extends Component {
  state = {
    cocktails: []
    // {
    //   cocktail: {
    //     id: '', 
    //     name: '',
    //     picture: '',
    //     glass: '',
    //     instruction: '',
    //     ingredient: {
    //       firstIng: '',
    //       secondIng: '',
    //       thirdIng: '',
    //       fourthIng: ''
    //     }
    //   }
    // }
  }

  fetchHandler = () => {
    const searchedKeyword = 'cocktail'
    const cocktailArray = []
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedKeyword}`)
      .then(response => {
        response.data.drinks.map(cocktail => {
          // console.log(cocktail)
          // cocktailArray.push(cocktail)
          // return cocktailArray;
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
          return cocktailArray;
        })
      })
    console.log(cocktailArray)
    this.setState({
      ...this.state,
      cocktails: cocktailArray
    })
  }


  render() {    
    return (
      <div>
        <Button text="Fetch Cocktails" clicked={this.fetchHandler}/>
        {
          this.state.cocktails.map(cocktail => {
            return <Cocktail
              key={cocktail.name}
              name={cocktail.name}
              picture={cocktail.picture}
              glass={cocktail.glass}
              instruction={cocktail.instruction}
              ingredient={cocktail.ingredient}
            />
          })
        }
        <Cocktail 
        />
      </div>
    );
  }
}

export default CocktailBuilder;
