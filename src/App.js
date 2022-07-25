import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import HomePage from './Pages/HomePages';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProductCollectionPage from './Pages/ProductCollectionPage'
import ProductPage from './Pages/ProductPage'
import 'antd/dist/antd.css'
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
    <Switch>
    <Route exact path='/' >
        <Redirect to='/mall'></Redirect>
      </Route>
      <Route exact path='/mall' >
        <HomePage />
      </Route>
      <Route exact path='/cart' >
        <CartPage />
      </Route>
      <Route exact path='/checkout' >
        <CheckoutPage />
      </Route>
      <Route exact path='/mall/:categoryName' >
        <ProductCollectionPage />
      </Route>
      <Route exact path='/:productName' >
        <ProductPage />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
