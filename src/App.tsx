import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import HomePage from './pages/HomePage'
import PricesPage from './pages/PricesPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/prices" element={<PricesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
