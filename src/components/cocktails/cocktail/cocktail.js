import React, { Component } from 'react';
import classes from './cocktail.module.css';

import { withRouter } from 'react-router-dom';
// import { useLocation, useParams } from "react-router";

//redux
import { connect } from 'react-redux';

class Cocktail extends Component {
  
  
  render() {
    //get id
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
    
    // return ingredient array
    let ingredientItems = Object.keys(this.props.cocktails[cktlIndex].ingredient)
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

    return (
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
            <button onClick={this.props.cocktails[cktlIndex].deleteCocktail} className={classes.ButtonDelete}> ❌ </button>
            </div>
        </div>
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps,null)(withRouter(Cocktail));
