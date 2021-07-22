import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
