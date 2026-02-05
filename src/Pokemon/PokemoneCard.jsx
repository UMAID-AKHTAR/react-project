import React from 'react'

function PokemoneCard({element}) {
  return (
    <li
            key={element.id}
            className="bg-gradient-to-r from-fuchsia-400 to-orange-400 w-52 h-72 rounded-2xl overflow-hidden flex flex-col"
          >
            {/* IMAGE AREA */}
            <figure className="h-1/3 flex justify-center">
              <img
                src={element.sprites.front_default}
                alt={element.name}
                className="w-auto h-auto object-contain"
              />
            </figure>

            {/* NAME */}
            <p className="flex-1 flex items-center justify-center capitalize font-semibold">
              {element.name}
            </p>
          </li>
  )
}

export default PokemoneCard