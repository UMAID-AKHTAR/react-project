function CrudCard({
  ele,
  title,
  body,
  id,
  handledelete,
  number,
  handleupdate,
}) {
  return (
    <li
      className="bg-white/5 backdrop-blur-md text-white p-4 rounded-xl
               border-l-2 border-fuchsia-950
               shadow-lg
               transition-all duration-200
               hover:scale-[1.02]
               hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-z-10"
    >
      <p className="font-bold text-amber-400 text-lg">{number}</p>

      <p className="font-semibold text-blue-400 font-serif text-xl mt-1"> 
        {title}
      </p>

      <p className="text-sm px-2 mt-3 font-serif text-gray-200">{body}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => handleupdate(ele)}
          className="bg-blue-600 px-3 py-1 rounded-md
                 transition-all duration-200
                 hover:scale-105
                 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        >
          Edit
        </button>

        <button
          onClick={() => handledelete(id)}
          className="bg-red-600 px-3 py-1 rounded-md 
                 transition-all duration-200
                 hover:scale-105
                 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CrudCard;
