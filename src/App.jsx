import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import { ProductsContextProvider } from './context/ProductsContext';

function App() {
return (
    
    <BrowserRouter>
    <ProductsContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Cart' element={<h2>Cart</h2>}/>
        <Route path='Products' element={<Products />}/>    
      </Routes>
    </ProductsContextProvider>
    </BrowserRouter>
);
}

export default App;
