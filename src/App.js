import './App.css';
import CocktailBuilder from './containers/cocktailBuilder/cocktailBuilder';
import Header from './components/UI/header/header';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import asyncComponents from '../src/hoc/asyncComponents/asyncComponents';

//lazy loading
const asyncCocktail = asyncComponents(() => {
  return import('../src/components/cocktails/cocktail/cocktail');
})

const asyncFavourite = asyncComponents(() => {
  return import('./containers/Favourites/favourite');
})


function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route path="/" exact component={CocktailBuilder}/>
          <Route path="/favourite" exact component={asyncFavourite}/>
          <Route path="/:id" exact component={asyncCocktail} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
