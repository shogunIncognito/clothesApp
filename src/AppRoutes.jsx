import { Route, Routes } from 'react-router-dom'
import Index from './pages'
import Clothes from './pages/Clothes'

export default function AppRoutes () {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path='/clothes' element={<Clothes />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}
