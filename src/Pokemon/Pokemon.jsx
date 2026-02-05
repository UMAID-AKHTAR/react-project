import { useState, useEffect } from "react";
import axios from "axios";
import PokemoneCard from "./PokemoneCard";

function Pokemone() {
  const [Search, SetSearch] = useState("");
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(API);
        const results = response.data.results;

        const result = results.map(async (current) => {
          const actualData = await axios.get(current.url);
          return actualData.data;
        });

        const x = await Promise.all(result);
        setData(x);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPokemon();
  }, []);

  if (Loading) return <p className="text-center">Loading...</p>;

  // 🔍 SEARCH FILTER
  const filteredData = Data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-purple-950 to-green-950 min-h-screen pt-20">
      {/* NAV */}
      <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-16 flex items-center justify-center fixed top-0 left-0 w-full z-50">
        <h1 className="bg-gradient-to-r from-purple-950 to-green-950 bg-clip-text text-transparent font-extrabold text-4xl">
          Pokemone
        </h1>
      </nav>

      {/* SEARCH */}
      <section className="flex items-center justify-center">
        <input
          type="search"
          value={Search}
          onChange={(e) => SetSearch(e.target.value)}
          className="bg-blue-200 rounded-md m-4 px-4 py-2 w-64 outline-none"
          placeholder="Search Pokémon"
        />
      </section>

      {/* CARDS */}
      <ol className="flex flex-wrap gap-4 justify-center py-6">
        {filteredData.map((element) =>  <PokemoneCard key={element.id} element={element}/>
        )}
      </ol>
    </div>
  );
}

export default Pokemone;
