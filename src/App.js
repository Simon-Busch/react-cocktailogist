import './App.css';
import CocktailBuilder from './containers/cocktailBuilder/cocktailBuilder';
import Header from './components/UI/header/header';
import { Route, Switch }from 'react-router-dom';
// import Cocktail from '../src/components/cocktails/cocktail/cocktail';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={CocktailBuilder}/>
        {/* <Route path="/cocktail/:id" exact component={Cocktail}/> */}
      </Switch>
    </div>
  );
}

export default App;



// import React, { Component, Fragment } from 'react';
// // import axiosFireBase from '../../axios-cocktail';
// import axios from 'axios'
// import Cocktails from '../../components/cocktails/cocktails';
// import Button from '../../components/UI/button/button';
// import CocktailContainer from '../../hoc/CocktailContainer';
// import { withRouter, Switch, Route } from 'react-router-dom';
// // import classes from './cocktailBuilder.module.css';
// import Cocktail from '../../components/cocktails/cocktail/cocktail';

// class CocktailBuilder extends Component {
//   state = {
//     cocktails: [],
//     buttonShow: true
//   }

//   fetchHandler = () => {
//     const searchedKeyword = 'cocktail'
//     const cocktailArray = []
//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedKeyword}`)
//       .then(response => {
//         response.data.drinks.forEach(cocktail => {
          
//           cocktailArray.push({
//             id: cocktail.idDrink, 
//             name: cocktail.strDrink,
//             picture: cocktail.strDrinkThumb,
//             glass: cocktail.strGlass,
//             instruction: cocktail.strInstructions,
//             ingredient: {
//               firstIng: cocktail.strIngredient1,
//               secondIng: cocktail.strIngredient2,
//               thirdIng: cocktail.strIngredient3,
//               fourthIng: cocktail.strIngredient4
//             }
//           })
//         })
//         this.setState({
//           ...this.state,
//           cocktails: cocktailArray,
//           buttonShow: false
//         })
//         // console.log(cocktailArray)
//       })      
//       .catch(error => {
//         console.log(error)
//       })

      
//   }

//   deleteHandle = (id) => {
//     console.log(id)
//     const oldState = this.state.cocktails
//     console.log(oldState)
//     oldState.slice(id, 1)
    
//     this.setState({oldState})
//   }

//   render() {
//     let cocktailCont = null;
//     // console.log(this.state.cocktails.length);
//     if (this.state.cocktails.length > 0) {
//       // console.log(this.state.cocktails)
//       cocktailCont = this.state.cocktails.map(cocktail => (
//           <Cocktails {...this.props}
//             key={cocktail.name}
//             id={cocktail.idDrink}
//             name={cocktail.name}
//             picture={cocktail.picture}
//             glass={cocktail.glass}
//             instruction={cocktail.instruction}
//             ingredients={cocktail.ingredient}
//             deleteCocktail={() => this.deleteHandle(cocktail.idDrink)}
//           />
//       ))
//     } else {
//       cocktailCont = <p style={{color:'white'}}>please fetch cocktails</p>
//     }

//     return (
//       <Fragment>
//         <div style={{textAlign:'center'}}>
//           {this.state.buttonShow ? <Button text="Fetch Cocktails" clicked={this.fetchHandler} btnType="Main"/> : null}
//           <CocktailContainer >
//             {cocktailCont}
//           </CocktailContainer>
//         </div>
//         <Switch>
//           <Route path="/cocktails/:id" component={Cocktail} />
//         </Switch>
//       </Fragment>
//     );
//   }
// }

// export default withRouter(CocktailBuilder);
