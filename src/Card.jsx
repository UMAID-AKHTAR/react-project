import React from 'react'

function Card({item}) {
  return (
   <li
      className="relative mb-3 w-52 h-72 rounded-md list-none border-amber-950 border-2 items-center 
       bg-gradient-to-r from-blue-950 via-emerald-900 to-blue-800
       hover:scale-110 transition-transform duration-initial overflow-hidden">

      <p className="text-center text-green-100 py-2 m-0 not-visited: tracking-widest font-bold">

        {item.login.charAt(0).toUpperCase() + item.login.slice(1)}
      </p>
      <img
        className="object-cover p-2 w-full flex-1 rounded-2xl"
        src={item.avatar_url}
        alt={item.login}
      />
      
      <a href={item.html_url} target="_blank" rel="noopener noreferrer" className="py-2 whitespace-nowrap tracking-widest absolute left-1/2 -translate-x-1/2 bottom-2  text-green-100 
       font-bold hover:text-rose-950 ">
       GitHub Account
      </a>
    </li>
  )
}

export default Card;