import React, { Component, Fragment } from 'react';
import classes from './cocktail.module.css';
import { withRouter } from 'react-router-dom';
import Button from '../../UI/button/button';
import { findIndexInData } from '../../../utility/findIndexInData';
import axiosFireBase from '../../../axios-cocktail';
//redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/action';
import toast, { Toaster } from 'react-hot-toast';

import {getIngredients} from '../../../utility/getIngredients';

class Cocktail extends Component {
  postHandler = (cocktail)  => {
    axiosFireBase.post('/saved-cocktails.json', cocktail)
      .then(response => toast.success('Successfully saved!'))
      .catch(error => toast.error("This didn't work."))
  }

  render() {
    //return the cocktail to display
    let cktlIndex = findIndexInData(this.props.cocktails,'id', this.props.match.params.id)
    //get list of ingredients
    let ingredientItems = getIngredients (this.props.cocktails[cktlIndex]);
      
    return (
      <Fragment>
      <div><Toaster/></div>
      {this.props.cocktails[cktlIndex] ? 
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
