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
    <Route path='/' exact>
        <Redirect to='/mall'></Redirect>
      </Route>
      <Route path='/mall' exact>
        <HomePage />
      </Route>
      <Route path='/cart' exact>
        <CartPage />
      </Route>
      <Route path='/checkout' exact>
        <CheckoutPage />
      </Route>
      <Route path='/mall/:categoryName' exact>
        <ProductCollectionPage />
      </Route>
      <Route path='/:productName' exact>
        <ProductPage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
