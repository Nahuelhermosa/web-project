import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import { ProductsContextProvider } from './context/ProductsContext';
import Cart from './components/Cart';
import Contact from './pages/Contact';



function App() {
return (
    
    <BrowserRouter>
    <ProductsContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Products' element={<Products />}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </ProductsContextProvider>
    </BrowserRouter>
);
}

export default App;
