import { useState } from 'react'

export default function Modal ({ clothe, handleSelect, handleAddToCar }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      handleSelect(null)
    }, 600)
  }

  return (
    <div className='fixed top-0 z-50 left-0 modal bg-transparent w-full h-screen flex justify-center items-center'>
      <div className={`bg-slate-200 ${isClosing && 'animate__slideOutDown'} animate__zoomIn animate__animated border-2 shadow-2xl rounded-md max-w-[400px] overflow-hidden`}>
        <div className=' overflow-hidden'>
          <img className='rounded w-full' src={clothe.imagen} alt={clothe.nombre} />
        </div>
        <div className='p-5 mx-2 gap-2 flex-col flex'>
          <h2 className='text-2xl'>{clothe.nombre}</h2>
          <p className='text-lg'>{clothe.descripcion}</p>
          <p className='text-3xl'>$ {clothe.precio}</p>
          <div className='flex gap-3 mt-7 mb-1 justify-center'>
            <button onClick={() => handleAddToCar(clothe)} className='hover:bg-blue-800 px-5 py-2 bg-blue-600 text-white rounded-md'>Comprar</button>
            <button onClick={handleClose} className='hover:bg-stone-800 px-5 py-2 bg-stone-600 text-white rounded-md'>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
