import React, { Component, Fragment } from 'react';
import axiosFireBase from '../../axios-cocktail';
import axios from 'axios'
import Cocktails from '../../components/cocktails/cocktails';
import Button from '../../components/UI/button/button';
import CocktailContainer from '../../hoc/CocktailContainer';

import classes from './cocktailBuilder.module.css';
import Cocktail from '../../components/cocktails/cocktail/cocktail';
import Input from '../../components/UI/input/input';

//action
import * as actionCreators from '../../store/action';

//routing
import { withRouter, Switch, Route } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
// import * as actionType from '../../store/action';


class CocktailBuilder extends Component {
  
  state = {
    // cocktails: [],
    buttonShow: true,
    inputValue: null
  }

  fetchHandler = (searchedKeyword) => {
    // const searchedKeyword = 'cocktail'
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
          cocktails: cocktailArray,
          buttonShow: false
        })
      })      
      .catch(error => {
        console.log(error)
      })
      // console.log(cocktailArray)
  }

  // componentDidMount () {
  //   this.fetchHandler('cocktail')
  // }

  postDataHandler = () => {
    const currentState = {
      ...this.state
    }
    axiosFireBase.post('/cocktails.json', currentState)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  // TO DO
  deleteHandle = (id) => {
    // console.log(id)
    const oldState = this.state.cocktails
    console.log(oldState)
    oldState.slice(id, 1)
    
    this.setState({oldState})
  }

  inputHandler = (event) =>  {
    this.setState({
      ...this.state,
      inputValue: event.target.value,
      buttonShow: true
    })
  }

  render() {
    // console.log(this.props)
    let cocktailCont = null;
    if (this.props.cocktails.length > 0) {
      cocktailCont = this.props.cocktails.map(cocktail => (
          <Cocktails {...this.props}
            key={cocktail.name}
            id={cocktail.id}
            name={cocktail.name}
            picture={cocktail.picture}
            glass={cocktail.glass}
            instruction={cocktail.instruction}
            ingredients={cocktail.ingredient}
            // deleteCocktail={() => this.deleteHandle(cocktail.id)}
          />
      ))
    } else {
      cocktailCont = <p style={{color:'white'}}>please fetch cocktails</p>
    }

    return (
      <Fragment>
        <div style={{textAlign:'center'}}>
          <Button text="Send to firebase" clicked={this.postDataHandler} btnType="Main"/>
          <div className={classes.Top}>
            <Input label="Select an option" change={this.inputHandler}/>
            <Button text="Find your 🍸" clicked={this.props.onFetching} btnType="Main"/>
            {/* {this.state.buttonShow ? <Button text="Find your 🍸" clicked={this.props.onFetching()} btnType="Main"/> : null} */}
          </div>
          <CocktailContainer >
            {cocktailCont}
          </CocktailContainer>
        </div>
        <Switch>
          <Route path="/cocktails/:id" component={Cocktail} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetching: () => dispatch(actionCreators.fetchCocktails()),
    onTest: () => dispatch(actionCreators.test())
  }
}
// actionType

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CocktailBuilder));
