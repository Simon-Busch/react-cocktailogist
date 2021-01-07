import React, { Component } from 'react';
import classes from './cocktail.module.css';

import { withRouter } from 'react-router-dom';
// import { useLocation, useParams } from "react-router";

//redux
import { connect } from 'react-redux';

class Cocktail extends Component {
  
  render() {
    console.log(this.props.cocktails[0])
      let ingredientItems = Object.keys(this.props.cocktails[0].ingredient)
        .map(ingredientKey => {
          return [...Array(this.props.cocktails[0].ingredient[ingredientKey])].map(
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
          <img src={this.props.cocktails[0].picture} alt={this.props.cocktails[0].name} className={classes.CocktailImg}/>
        </div>
        <div className={classes.CocktailFlexRight}>
          <div className={classes.CocktailFlexTop}>
            <h2>{this.props.cocktails[0].name}</h2>
            <p>🍸{this.props.cocktails[0].glass}</p>
            <ul className={classes.List}>
              {ingredientItems}
            </ul>
          </div>
          <div className={classes.CocktailFlexMiddle}>
            <h3>Instructions:</h3>
            <p><em>{this.props.cocktails[0].instruction}</em></p>
          </div>
          <div className={classes.Button}>
            <button onClick={this.props.cocktails[0].deleteCocktail} className={classes.ButtonDelete}> ❌ </button>
            </div>
        </div>
    </div>
    )
  }

  // let ingredientItems = Object.keys(this.props.cocktails.ingredients)
  //   .map(ingredientKey => {
  //     return [...Array(this.props.cocktails.ingredients[ingredientKey])].map(
  //       (ingredient) => {
  //         return <li key={ingredient}>
  //           {ingredient}
  //           </li> 
  //       }
  //     )
  //   }).reduce((arr, el) => {
  //     return arr.concat(el)
  //   }, [])

  // return (
    // <div className={classes.CocktailFlex}>
    //   <div className={classes.CocktailFlexTop}>
    //     <img src={this.props.cocktails.picture} alt={this.props.cocktails.name} className={classes.CocktailImg}/>
    //   </div>
    //   <div className={classes.CocktailFlexBottom}>
    //     <div className={classes.CocktailFlexMiddle}>
    //       <h2>{this.props.cocktails.name}</h2>
    //       <p>🍸{this.props.cocktails.glass}</p>
    //       <ul className={classes.List}>
    //         {ingredientItems}
    //       </ul>
    //     </div>
    //     <div className={classes.CocktailFlexRight}>
    //       <h3>Instructions:</h3>
    //       <p><em>{this.props.cocktails.instruction}</em></p>
    //     </div>
    //     <div className={classes.Button}>
    //       <button onClick={this.props.cocktails.deleteCocktail} className={classes.ButtonDelete}> ❌ </button>
    //       </div>
    //   </div>
    // </div>
    
  // );
};

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps,null)(withRouter(Cocktail));
