import './App.css';
import CocktailBuilder from './containers/cocktailBuilder/cocktailBuilder';
import Header from './components/UI/header/header';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Cocktail from '../src/components/cocktails/cocktail/cocktail';
import Navbar from './components/UI/navbar/navbar';
import asyncComponents from '../src/hoc/asyncComponents/asyncComponents';

const asyncCocktail = asyncComponents(() => {
  return import('../src/components/cocktails/cocktail/cocktail');
})


function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route path="/" exact component={CocktailBuilder}/>
          <Route path="/:id" exact component={asyncCocktail} />
          {/* <Route path="/favourite" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
