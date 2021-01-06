import './App.css';
import CocktailBuilder from './containers/cocktailBuilder/cocktailBuilder';
import Header from './components/UI/header/header';
import { Route, Switch }from 'react-router-dom';
import Cocktail from '../src/components/cocktails/cocktail/cocktail';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={CocktailBuilder}/>
        <Route path="/cocktail/:id" exact component={Cocktail}/>
      </Switch>
    </div>
  );
}

export default App;
