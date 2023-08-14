import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Clothes from './pages/Clothes'
import PayClothes from './pages/PayClothes'

export default function AppRoutes () {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path='/clothes' element={<Clothes />} />
      <Route path='/pay' element={<PayClothes />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}
