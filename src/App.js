import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import AddProductComponent from './components/AddProductComponent';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import GetProductsComponent from './components/GetProductsComponent';
import"bootstrap/dist/js/bootstrap.min.js"


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
          <div className="App">
            <Navbar/>
          <header className="App-header">
            <h1>Sokogarden-Buy & sell Online</h1>
          </header>
          <Routes>
            <Route path ='/signup' element={<SignupComponent/>}/>
            <Route path ='/signin' element={<SignInComponent/>}/>
            <Route path='/addproduct' element={<AddProductComponent/>}/>
            <Route path='/'element={<GetProductsComponent/>}/>

          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
