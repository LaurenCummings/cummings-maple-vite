import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <BrowserRouter basename={'cummings-maple-vite'}>
        <Navbar />
        <Routes>
          <Route path="/About" element={<AboutUs />} />
          <Route path="/" element={<Shop />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
