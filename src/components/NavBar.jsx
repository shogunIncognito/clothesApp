import { AiFillGithub, AiFillHome } from 'react-icons/ai'
import { FaTshirt } from 'react-icons/fa'
import { BiSolidCart } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { useShopCarStore } from '../store/shopCarStore'
import { MdDelete } from 'react-icons/md'

export default function NavBar () {
  const [open, setOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { items } = useShopCarStore()
  const navigate = useNavigate()
  const path = useLocation().pathname
  const nav = useRef(null)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      setOpen(false)
    }, 600)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (nav.current) {
        if (window.scrollY > 60) {
          nav.current.classList.add('scrolled')
        } else {
          nav.current.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav ref={nav} className='w-full top-0 z-20 bg-slate-50 duration-200 ease-in-out items-center transition-all p-5 gap-8 flex bg-transparent'>
        <Logo width='80px' className='absolute' />
        <div className='flex w-full justify-center m-auto animate__animated animate__fadeInDown'>
          <button onClick={() => navigate('/clothes')} className={`${path === '/clothes' && 'bg-slate-800 text-white'} hover:bg-slate-800 hover:text-white transition-all py-2 px-5 border-2 border-opacity-5 rounded border-black`}>
            <FaTshirt size='2.2em' />
          </button>
          <button onClick={() => navigate('/')} className={`${path === '/' && 'bg-slate-800 text-white'} hover:bg-slate-800 hover:text-white transition-all py-2 px-5 border-2 border-opacity-5 rounded border-black`}>
            <AiFillHome size='2.2em' />
          </button>
          <a href='https://github.com/shogunIncognito' className='hover:bg-slate-800 hover:text-white transition-all py-2 px-5 border-2 border-opacity-5 rounded border-black'>
            <AiFillGithub size='2.2em' />
          </a>
        </div>
        <button onClick={handleOpen} class='absolute end-0 mr-5 bg-gray-100 p-2 rounded-full transition-all duration-300 hover:bg-gray-300'>
          <small className='absolute right-0 font-bold top-0'>{items.length}</small>
          <BiSolidCart size='2.2rem' />
        </button>

      </nav>

      {open && (
        <section className='z-50 w-screen top-0 h-screen fixed modal'>
          <div className={`bg-slate-100 fixed w-[20%] animate__animated animate__rotateInDownRight ${isClosing && 'animate__rotateOutDownRight'} overflow-auto shadow-2xl h-screen end-0 top-0`}>
            <button onClick={handleClose} className='w-full p-5 bg-slate-200 hover:bg-slate-300 transition-colors'>
              X
            </button>
            {
            items.map(item => (
              <div className='flex items-center w-full justify-around p-2 gap-5' key={item.id}>
                <div className='max-w-[40%] flex-1'>
                  <img className='rounded-full' width='70px' src={item.imagen} alt={item.nombre} />
                </div>
                <h2 className='flex-1'>{item.nombre}</h2>
                <p className='flex-1'>$ {item.precio}</p>
                <button className='flex-1'>
                  <MdDelete className='hover:text-red-600 ml-5' size='1.3rem' />
                </button>
              </div>
            ))
          }
          </div>
        </section>
      )}
    </>
  )
}
