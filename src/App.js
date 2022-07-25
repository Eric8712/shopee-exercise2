import {
  Routes,
  Route,
  BrowserRouter,
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
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={ <CheckoutPage />} />
        <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route path="/:productName" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
