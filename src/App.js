import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { auth } from './firebase';
import Checkout from './pages/Checkout';
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function App() {

  const [{user}, dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log('Este es el authuser',authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/checkout-page">
              <CheckoutForm />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
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
