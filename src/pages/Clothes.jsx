import clothesjson from '../data/clothes.json'
import { BsCartPlus } from 'react-icons/bs'
import { useState } from 'react'
import Modal from '../components/Modal'
import { useShopCarStore } from '../store/shopCarStore'
import { toast } from 'react-hot-toast'

export default function Clothes () {
  const [selected, setSelected] = useState(null)
  const { items, addItem } = useShopCarStore()

  const handleSelect = clothe => setSelected(clothe)
  const handleAddToCar = clothe => {
    const item = items.find(item => item.id === clothe.id)

    if (!item) {
      addItem([...items, { ...clothe, cantidad: 1 }])
      toast.success('Producto agregado al carrito')
      return
    }

    const newItems = items.map(item => {
      if (item.id === clothe.id) {
        return { ...item, cantidad: item.cantidad + 1 }
      }
      return item
    })

    addItem(newItems)
    toast.success('Producto agregado al carrito')
  }

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center mt-8'>Nuestros productos</h1>

      <section className='grid grid-template gap-2 mx-[20%] my-20'>
        {clothesjson.map(clothe => (
          <div className='bg-slate-300 flex flex-col shadow-xl m-2 rounded-md max-w-lg' key={clothe.id}>
            <div className='max-h-[270px] overflow-hidden'>
              <img onClick={() => handleSelect(clothe)} className='cursor-pointer rounded' src={clothe.imagen} alt={clothe.nombre} />
            </div>
            <div className='p-3 flex flex-col'>
              <h2>{clothe.nombre}</h2>
              <p>$ {clothe.precio}</p>

              <button onClick={() => handleAddToCar(clothe)} className='text-black self-center hover:bg-black hover:text-white duration-200 ease-out transition-colors px-2 py-2 rounded-md mt-5'>
                <BsCartPlus size='1.7em' />
              </button>
            </div>
          </div>
        ))}
      </section>
      {selected && <Modal clothe={{ ...selected }} handleAddToCar={handleAddToCar} handleSelect={handleSelect} />}
    </div>
  )
}
