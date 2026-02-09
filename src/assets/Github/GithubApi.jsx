import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

const api = "https://api.github.com/users";

function GithubApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (isMounted) => {
    try {
      const res = await axios.get(api);
      if (isMounted) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    getData(isMounted);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full h-14 md:h-16 flex items-center justify-center
                      bg-gradient-to-r from-black via-slate-900 to-emerald-700 shadow-xl">
        <input
          type="search"
          placeholder="search"
          className="text-center w-1/4 h-10 bg-blue-100 text-black rounded-2xl"
        />
      </nav>

      {/* CONTENT */}
      <div className="pt-16 min-h-screen md:pt-20 flex flex-wrap gap-3 justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => <Card key={item.id} item={item} />)
        )}

      </div>
    </div>
  );
}

export default GithubApi;
