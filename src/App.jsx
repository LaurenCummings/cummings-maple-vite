import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import RecipePage from './pages/RecipePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Products" element={<Shop />} />
          <Route path="/:product" element={<ProductPage />} />
          <Route path="/Recipes" element={<RecipePage />} />
          <Route path="/ContactUs" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
