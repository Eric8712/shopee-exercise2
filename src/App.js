import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from './Pages/HomePages';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProductCollectionPage from './Pages/ProductCollectionPage'
import ProductPage from './Pages/ProductPage'
import 'antd/dist/antd.css'
import ScrollToTop from "./components/common/ScrollToTop";
import { AuthProvider } from "./components/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/cart" element={<CartPage />} />
        <Route  path="/checkout" element={ <CheckoutPage />} />
        <Route  path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route  path="/:productName" element={<ProductPage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
