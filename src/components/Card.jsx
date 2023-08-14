export default function Card ({ img, ...props }) {
  return (
    <div {...props} className='max-w-md mx-5 bg-slate-100 transition-all border-2 duration-300 ease-in-out shadow-md hover:shadow-xl rounded-md'>
      <div className='w-full overflow-hidden max-h-[420px]'>
        <img className='rounded-md hover:scale-[1.1] duration-300 transition-transform' src={img} alt='cardimg' />
      </div>
      <main className='flex p-5 flex-col gap-2 text-center'>
        <h2 className='text-2xl'>Vive la vida</h2>
        <p className='text-lg'>Las mejores prendas que encontraras en toda la via lactea</p>
      </main>
    </div>
  )
}
