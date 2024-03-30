
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHome from './components/Home';
import './css/Main1.css';
import './css/Listcard.css';
import './css/Main2.css'
import './css/products.css';
import Faceproducts from './components/Faceproducts';
import Bodyproducts from './components/Bodyproducts';

function App() {


    


  return (
   
  
    <Router>
    <Routes>
    <Route exact path="/" element={< MainHome />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Faceproducts" element={<Faceproducts/>} />
      <Route path="/Bodyproducts" element={<Bodyproducts/>} />
    
    </Routes>
  </Router>

  

  );
}


export default App;
