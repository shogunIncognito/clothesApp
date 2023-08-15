import Card from '../components/Card'
import card3img from '../assets/card-3.jpg'
import card2img from '../assets/card-2.jpg'
import card1img from '../assets/card-1.jpg'
import sideimg from '../assets/sideimg.jpg'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Index () {
  const navigate = useNavigate()
  return (
    <>
      <header className='hero h-screen w-full flex items-center justify-center text-white pb-20 overflow-hidden'>
        <div className='flex flex-col gap-5 items-center animate__animated animate__lightSpeedInRight'>
          <h1 className='text-4xl font-bold text-center '>Esto es Design Tee</h1>
          <h2 className='text-3xl text-center'>"Eleva tu look con nuestras prendas de alta calidad"</h2>
          <Button onClick={() => navigate('/clothes')} className='border-2 mt-3 py-3 px-8 hover:px-10 rounded-md transition-all duration-300 hover:text-black hover:bg-white bg-transparent'>Explora</Button>
        </div>
      </header>
      <section className='p-10 flex flex-col w-full justify-center items-center'>
        <h2 className='text-4xl font-bold text-center'>Tu Elección</h2>
        <div className='lg:mx-40 gap-5 lg:gap-0 my-8 flex flex-col lg:flex-row justify-around'>
          <Card className='flex-1' img={card1img} />
          <Card className='flex-1' img={card2img} />
          <Card className='flex-1' img={card3img} />
        </div>
      </section>

      <section className='hero2 h-screen w-full text-white flex justify-center items-center'>
        <div className='flex-col text-center lg:w-[45%] w-[75%]'>
          <h2 className='text-5xl'>Design Tee me cambio la vida</h2>
          <p className='mt-3 text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et vel sapiente impedit. Ratione nisi minima quos eligendi. Expedita sit quibusdam ex nobis officia nemo reprehenderit a voluptatem libero, voluptate dolorum!</p>
        </div>
      </section>

      <h2 className='p-10 py-14 text-4xl text-center'>Nuestro compromiso</h2>

      <section className='flex flex-1 flex-col lg:flex-row justify-around items-center bg-slate-300'>
        <div className='flex-1'>
          <img src={sideimg} alt='sideimg' />
        </div>
        <div className='flex-1 text-center'>
          <div className='m-20'>
            <h1 className='text-3xl mb-10'>Nos preocupamos por nuestros clientes</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempore quidem officiis vitae at nostrum unde repellat commodi veritatis quos, libero autem deleniti ea natus facilis hic illo quasi quisquam.</p>
          </div>
        </div>
      </section>
    </>
  )
}
