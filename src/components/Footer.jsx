import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Footer () {
  return (
    <footer className='flex w-full px-40 gap-5 flex-col bg-slate-200 justify-center items-center py-14'>
      <div className='flex lg:flex-row lg:gap-0 flex-col gap-5 text-center w-full justify-around'>
        <div className='flex-1'>
          <h2 className='flex'>
            <BsFillTelephoneFill />
            +32 322342435
          </h2>
          <h2 className='flex'>
            Calle 25# Sur Octava Circunvalar - Villavicencio
          </h2>
        </div>
        <div className=' flex-1'>
          <h2>Nosotros</h2>
          <h2>Nuestra ropa</h2>
          <h2>Donde nos ubicamos</h2>
          <h2>Contactanos</h2>
        </div>
        <div className='flex flex-1 flex-col items-center'>
          <h2>Shogunincognito</h2>
          <div className='flex justify-center'>
            <AiFillGithub size='2rem' />
            <AiFillLinkedin size='2rem' />
          </div>
        </div>
      </div>

      <div className='flex self-center text-center flex-col mt-5'>
        <div className='flex justify-center items-center'>
          <AiFillYoutube size='2rem' />
          <AiFillFacebook size='2rem' />
          <AiFillTwitterCircle size='2rem' />
        </div>
        <small>Copyright 2023@</small>
      </div>
    </footer>
  )
}
