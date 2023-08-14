import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'animate.css'
import { Toaster } from 'react-hot-toast'

function App () {
  return (
    <BrowserRouter>
      <Toaster />
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
