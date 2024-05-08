import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import { ProductsContextProvider } from './context/ProductsContext';
import Cart from './components/Cart';

function App() {
return (
    
    <BrowserRouter>
    <ProductsContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Products' element={<Products />}/>    
      </Routes>
    </ProductsContextProvider>
    </BrowserRouter>
);
}

export default App;
