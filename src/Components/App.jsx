//Generales
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

//Toastify
import { ToastContainer } from 'react-toastify';

//Firebase
import { getProductos } from '../utils/firebase';

export const App = () => {
  //cargarBDD()  //solo la usamos una vez para subir el json
  getProductos()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar nombre={"Jano Sustentable"} />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <ToastContainer />
          </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  )
}