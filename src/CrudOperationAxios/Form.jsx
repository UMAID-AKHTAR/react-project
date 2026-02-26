import { useState, useEffect } from "react";
import { postData, upDateData } from "../Api/AxiosData";

function Form({ data, setData, update, setUpdate, empty, setEmpty }) {
  
  const [add, setAdd] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (update?.id)
      setAdd({
        title: update.title || "",
        body: update.body || "",
      });
  }, [update]);

  const updatePostdata = async () => {
    try {
      const res = await upDateData(update.id, add);
      setData((prev) =>
        prev.map((item) => (item.id === update.id ? res.data : item)),
      );
      
      setAdd({ title: "", body: "" });
      setUpdate({});
      setEmpty(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Post Data
  const addpostdata = async () => {
    try {
      const res = await postData(add);
      setData((prev) => [...prev, res.data]);
      setAdd({ title: "", body: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  // Submit Data
  const submit = async (e) => {
    e.preventDefault();

    if (!add.title || !add.body) {
      alert("Dono Bhar L@wde");
      return;
    }

    if (empty) {
      await updatePostdata();
    } else {
      await addpostdata();
    }
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="bg-gradient-to-r from-blue-900 via-slate-900 to-black 
                 shadow-lg rounded-lg flex justify-center gap-2 
                 w-fit mx-auto p-3"
      >
        <section className="flex py-2 px-2 items-stretch">
          <input
            placeholder="Add Title"
            type="text"
            name="title"
            value={add.title}
            title="Enter Title"
            onChange={(e) => setAdd((prev) => ({ ...prev, title: e.target.value }))}
            className="bg-white/10 backdrop-blur-sm outline-none text-white font-semibold px-2 py-1 rounded-md border border-white/20"
          />
          <input
            placeholder="Add Task"
            type="text"
            name="body"
            value={add.body}
            title="Enter Body"
            onChange={(e) => setAdd((prev) => ({ ...prev, body: e.target.value }))}
            className="bg-white/10 backdrop-blur-sm outline-none text-white font-semibold px-2 py-1 rounded-md border border-white/20 ml-6"
          />
          <button
            type="submit"
            className="bg-blue-600 h-auto w-20 rounded-md ml-3 py-2 font-semibold text-amber-50 transition-all duration-200 
                            hover:scale-100 hover:shadow-current active:scale-95"
          >
            {empty ? "Edit" : "Add"}
          </button>
        </section>
      </form>
    </>
  );
}

export default Form;
