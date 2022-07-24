import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import HomePage from './Pages/HomePages';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProductCollectionPage from './Pages/ProductCollectionPage'
import ProductPage from './Pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' exaxt>
        <Redirect to='/mall'></Redirect>
      </Route>
      <Route path='/mall' exaxt>
        <HomePage />
      </Route>
      <Route path='/cart' exaxt>
        <CartPage />
      </Route>
      <Route path='/checkout' exaxt>
        <CheckoutPage />
      </Route>
      <Route path='/mall/:categoryName' exaxt>
        <ProductCollectionPage />
      </Route>
      <Route path='/:productName' exaxt>
        <ProductPage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
