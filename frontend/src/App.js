
import './App.css';
import Navbar from './Componment/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Longinsignup from './Pages/Longinsignup'
import Footer from './Componment/Footer/Footer';
import banner from './Componment/Assets/banner.jpg'
import List from './Componment/List/List';
 
function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Navbar />
      <List/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/sets' element={<Shopcategory banner={banner} category="set"/>}/>
        <Route path='/pants' element={<Shopcategory banner={banner} category="pant"/>}/>
        <Route path='/dresses' element={<Shopcategory banner={banner} category="dress"/>}/>
        <Route path='/customs' element={<Shopcategory banner={banner} category="allset"/>}/>
        <Route path='/blazer' element={<Shopcategory banner={banner} category="blazer"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
       </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Longinsignup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
