import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom"

//import { lazy, Suspense } from 'react';

//const ItemDetailContainer = lazy(() => )

function App() {
  return (
    <BrowserRouter>
        <div style={{ textAlign: "center", marginTop: 20}}>
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/detalle' element={<ItemDetailContainer />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
