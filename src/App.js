
import { Form } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" />} />
          <Route path='/women' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='/signup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;