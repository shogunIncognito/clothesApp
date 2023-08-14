import { useShopCarStore } from '../store/shopCarStore'

export default function PayClothes () {
  const { items, moneyToPay } = useShopCarStore()

  return (
    <div className='w-full h-screen flex'>
      <section className='flex-1 flex flex-col ml-52 mt-20 mx-20'>
        <h2 className='text-2xl mb-2'>Detalles de pago</h2>
        <p><b>Información</b> - Envió - Pago</p>
        <div className='flex flex-col my-5 gap-1'>
          <h2 className='text-lg'>Contacto</h2>
          <input type='text' className='px-4 py-2 bg-slate-200 rounded-md' placeholder='Correo o numero de teléfono' />
          <div className='flex gap-2 mt-2'>
            <input type='checkbox' />
            <p>Enviarme al correo noticias y ofertas</p>
          </div>
        </div>
        <div className='flex flex-col mt-3 gap-2'>
          <h1 className='text-xl'>Dirección de envió</h1>
          <select className='px-4 py-2 bg-slate-200 rounded-md'>
            <option value=''>Colombia</option>
            <option value=''>Venezuela</option>
            <option value=''>Ecuador</option>
            <option value=''>Peru</option>
          </select>
          <div className='flex gap-1'>
            <input className='px-4 flex-1 py-2 bg-slate-200 rounded-md' type='text' placeholder='Nombre' />
            <input className='px-4 flex-1 py-2 bg-slate-200 rounded-md' type='text' placeholder='Apellido' />
          </div>
          <input className='px-4 py-2 bg-slate-200 rounded-md' type='text' placeholder='Dirección' />
          <input className='px-4 py-2 bg-slate-200 rounded-md' type='text' placeholder='Apartamento, habitación, etc. (opcional)' />
          <div className='flex gap-2'>
            <input className='flex-1 px-4 py-2 bg-slate-200 rounded-md' type='text' placeholder='Ciudad' />
            <input className='flex-1 px-4 py-2 bg-slate-200 rounded-md' type='text' placeholder='Departamento' />
            <input className='flex-1 px-4 py-2 bg-slate-200 rounded-md' type='text' placeholder='Código postal' />
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' />
            <label>Guardar información para la proxima vez</label>
          </div>
        </div>
        <button className='px-4 py-3 bg-blue-800 text-white self-end mt-5 rounded-md'>Continuar</button>
      </section>
      <section className='flex-1 bg-slate-300'>
        {/* Se recorre los items */}
        <div className='w-[40%] flex flex-col ml-14 gap-2 my-20'>
          {
            items.map(item => (
              <div key={item.id} className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <img className='rounded-full' src={item.imagen} width='45px' alt='img' />
                  <h2>{item.nombre}</h2>
                </div>
                <p>$ {item.precio}</p>
              </div>
            ))
          }
          <div className='flex justify-between  items-center'>
            <p>Subtotal</p>
            <p>$ {moneyToPay}</p>
          </div>
          <div className='flex justify-between  items-center'>
            <p>Envió</p>
            <p className='text-green-500'>Gratis</p>
          </div>
          <div className='flex justify-between  items-center'>
            <p>Total</p>
            <p>$ {moneyToPay}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
