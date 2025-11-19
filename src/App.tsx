import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import HomePage from './pages/HomePage'
import PricesPage from './pages/PricesPage'
import OrdersPage from './pages/OrdersPage'
import GalleryPage from './pages/GalleryPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
