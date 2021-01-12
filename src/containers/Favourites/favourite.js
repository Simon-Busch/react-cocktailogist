import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import cocktail from '../../components/cocktails/cocktail/cocktail';
import Cocktails from '../../components/cocktails/cocktails';
import CocktailContainer from '../../hoc/CocktailContainer/CocktailContainer';
import * as actionCreators from '../../store/actions/action';

class favourite extends Component {
  componentDidMount () {
    this.props.onFetchingSavedCocktails();
  }
  render () {
    let cocktailCont = null;
    if (this.props.cocktails.length > 0) {
      cocktailCont = this.props.cocktails.map(cocktail => (
          <Cocktails
            id={cocktail.id}
            key={cocktail.id}
            name={cocktail.name}
            picture={cocktail.picture}
          />
      ))
    }

    return (
      <Fragment>
        <h1 style={{textAlign:"center"}}>Your favourite cocktails</h1>
        <CocktailContainer>
          {cocktailCont}
        </CocktailContainer>
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    cocktails: state.savedCocktails
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    onFetchingSavedCocktails: () => dispatch(actionCreators.fetchSavedCocktails())
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(favourite);