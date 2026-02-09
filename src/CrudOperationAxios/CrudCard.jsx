function CrudCard({ title, body, id, handledelete }) {
  return (
    <li className='bg-black/80 text-white p-4 rounded-lg'>

      <p className='font-bold text-amber-600'>{id}</p>
      <p className='font-semibold text-blue-700 font-serif'>{title}</p>
      <p className='text-sm px-2 mt-3 font-serif'>{body}</p>

      <div className='flex gap-3 mt-3'>
        <button className='bg-blue-600 px-3 py-1 rounded'>Edit</button>
        <button className='bg-red-600 px-3 py-1 rounded'
          onClick={() => handledelete(id)}> Delete </button>
      </div>
    </li>
  )
}

export default CrudCard
