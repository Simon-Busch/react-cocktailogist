import React from 'react';
// import Cocktail from '../cocktails/cocktail/cocktail';
import { connect } from 'react-redux';

const favourite = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cocktail: state.savedCocktails
  }
}

export default  connect(mapStateToProps, null)(favourite);