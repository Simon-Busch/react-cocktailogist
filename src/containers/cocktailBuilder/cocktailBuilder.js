import React, { Component, Fragment } from 'react';
import Cocktails from '../../components/cocktails/cocktails';
import Button from '../../components/UI/button/button';
import CocktailContainer from '../../hoc/CocktailContainer/CocktailContainer';
import classes from './cocktailBuilder.module.css';
import Input from '../../components/UI/input/input';

//action
import * as actionCreators from '../../store/actions/action';

//routing
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';


class CocktailBuilder extends Component {
  state = {
    buttonShow: true,
    inputValue: null
  }

  componentDidMount () {
    this.props.onFetching('cocktail');
    this.props.onFetchingSavedCocktails();
  }

  inputHandler = (event) =>  {
    this.setState({
      ...this.state,
      inputValue: event.target.value,
      buttonShow: true
    })
  }

  render() {
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
          />
      ))
    } else {
      cocktailCont = <p style={{color:'white'}}>please fetch cocktails</p>
    }

    return (
      <Fragment>
        <div style={{textAlign:'center'}}>
          {/* <Button text="Send to firebase" clicked={this.props.onFetchingSavedCocktails} btnType="Main"/> */}
          <div className={classes.Top}>
            <Input label="Select an option" change={this.inputHandler}/>
            <Button text="Find your 🍸" clicked={() => this.props.onFetching(this.state.inputValue)} btnType="Main"/>
          </div>
          <CocktailContainer >
            {cocktailCont}
          </CocktailContainer>
        </div>
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
    onFetching: (ingredient) => dispatch(actionCreators.fetchCocktails(ingredient)),
    onPosting: () => dispatch(actionCreators.postCocktails()),
    onFetchingSavedCocktails: () => dispatch(actionCreators.fetchSavedCocktails())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CocktailBuilder));
