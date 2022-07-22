import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDeteailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';

//import { lazy, Suspense } from 'react';

//const ItemDetailContainer = lazy(() => )

function App() {
  return (
    <BrowserRouter>
        <div style={{ textAlign: "center", marginTop: 20}}>
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/detalle/:productoId' element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ItemDetailContainer/>
              </Suspense>
            }/>
          </Routes>
          <ItemDeteailContainer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
