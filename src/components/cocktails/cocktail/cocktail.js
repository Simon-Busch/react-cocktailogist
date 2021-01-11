import React, { Component, Fragment } from 'react';
import classes from './cocktail.module.css';
import { withRouter } from 'react-router-dom';
import Button from '../../UI/button/button';
//redux
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/action';

import axiosFireBase from '../../../axios-cocktail';

class Cocktail extends Component {

  postHandler = (cocktail)  => {
    axiosFireBase.post('/saved-cocktails.json', cocktail)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    const id = this.props.match.params.id

    //find index
    const findIndexInData = (data, property, value) => {
      let result = -1;
      data.some((item, i) => {
          if (item[property] === value) {
              result = i;
              return true;
          }
      });
      return result;
    }

    //return my full cocktail array
    let cocktailArray = this.props.cocktails
    //return the cocktail to display
    let cktlIndex = findIndexInData(cocktailArray,'id', id)
    let ingredientItems;
    let check = this.props.cocktails[cktlIndex];
    // return ingredient array
    if (check) {
      ingredientItems = Object.keys(this.props.cocktails[cktlIndex].ingredient)
      .map(ingredientKey => {
        return [...Array(this.props.cocktails[cktlIndex].ingredient[ingredientKey])].map(
          (ingredient) => {
            return <li key={ingredient}>
              <em>
              {ingredient}
              </em>
            </li> 
          }
        )
      }).reduce((arr, el) => {
        return arr.concat(el)
      }, [])
    }

    // const cocktailArr = []
    // axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    // .then(response => {
    //   // console.log(response.data.drinks);
    //     cocktailArr.push({
    //       id: response.data.drinks[0].idDrink, 
    //       name: response.data.drinks[0].strDrink,
    //       picture: response.data.drinks[0].strDrinkThumb,
    //       glass: response.data.drinks[0].strGlass,
    //       instruction: response.data.drinks[0].strInstructions,
    //       ingredient: {
    //         firstIng: response.data.drinks[0].strIngredient1,
    //         secondIng: response.data.drinks[0].strIngredient2,
    //         thirdIng: response.data.drinks[0].strIngredient3,
    //         fourthIng: response.data.drinks[0].strIngredient4
    //       }
    //     })
    //   })
    // .catch(error => {
    //   console.log(error)
    // })
      
    return (
      <Fragment>
      {check ? 
        <div className={classes.CocktailFlex}>
          <div className={classes.CocktailFlexLeft}>
            <img src={this.props.cocktails[cktlIndex].picture} alt={this.props.cocktails[cktlIndex].name} className={classes.CocktailImg}/>
          </div>
          <div className={classes.CocktailFlexRight}>
            <div className={classes.CocktailFlexTop}>
              <h2>{this.props.cocktails[cktlIndex].name}</h2>
              <p>🍸{this.props.cocktails[cktlIndex].glass}</p>
              <ul className={classes.List}>
                {ingredientItems}
              </ul>
            </div>
            <div className={classes.CocktailFlexMiddle}>
              <h3>Instructions:</h3>
              <p><em>{this.props.cocktails[cktlIndex].instruction}</em></p>
            </div>
            <div className={classes.Button}>
            </div>
            <div style={{margin: 'auto'}}>
              <Button text="Add to your favorite ⭐️" 
                btnType="Like"
                clicked={() => this.postHandler(this.props.cocktails[cktlIndex])}
                />
            </div>
          </div>
      </div>
      : <p style={{textAlign:'center'}}>Something went wrooooooong</p> }
    </Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveCocktail: () => dispatch((cocktail) => actions.saveCocktail(cocktail))
  }
}
// make the binding to dispatch the action ! 

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Cocktail));
