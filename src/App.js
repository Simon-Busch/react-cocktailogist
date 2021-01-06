import './App.css';
import CocktailBuilder from './containers/cocktailBuilder/cocktailBuilder';
import Header from './components/UI/header/header';
import { BrowserRouter, Route }from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Route path="/" exact component={CocktailBuilder}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
