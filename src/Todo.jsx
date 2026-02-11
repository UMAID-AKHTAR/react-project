import { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // ✅ NEW

  const addData = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All fields are required");
      return;
    }

    if (editIndex !== null) {
      // ✅ UPDATE MODE
      const updatedTask = [...task];
      updatedTask[editIndex] = { name, email };
      setTask(updatedTask);
      setEditIndex(null);
    } else {
      // ✅ ADD MODE
      setTask((prev) => [...prev, { name, email }]);
    }

    setName("");
    setEmail("");
  };

  const deleteTask = (index) => {
    const d = task.filter((_, i) => i !== index);
    setTask(d);

    // agar delete kiya aur wahi edit ho raha tha
    if (index === editIndex) {
      setEditIndex(null);
      setName("");
      setEmail("");
    }
  };

  const editTask = (index) => {
    setName(task[index].name);
    setEmail(task[index].email);
    setEditIndex(index);
  };

  const v = "No Data Available Please Add Some Data....";

  return (
    <>
      <form onSubmit={addData}>
        <nav className="bg-black w-full text-sky-300 text-center text-3xl font-bold font-sans py-4">
          Todo List
        </nav>
        <section className="flex justify-center">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-blue-300 border-4 border-cyan-400 rounded-lg px-5 py-2 text-xl outline-none inline-block m-6"
          />

          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-blue-300 border-2 border-cyan-400 rounded-lg px-5 py-2 text-xl outline-none inline-block m-6"
          />

          <button
            type="submit"
            className="bg-black text-amber-50 rounded-lg px-6 py-3 text-xl font-bold m-8"
          >
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </section>
      </form>

      <div className="px-5 py-2 mt-8 bg-pink-700">
        {task.length === 0 && <p>{v}</p>}

        <ul className="space-y-4 px-6 py-4">
          {task.map((item, i) => (
            <li
              key={i}
              className="flex items-center px-6 py-4 bg-blue-300 rounded-lg"
            >
              <p className="w-1/4">{item.name}</p>
              <p className="w-1/2">{item.email}</p>

              <div className="ml-auto flex gap-4">
                <button
                  onClick={() => deleteTask(i)}
                  className="bg-red-700 px-4 py-1 rounded-2xl font-semibold text-white"
                >
                  Delete
                </button>

                <button
                  onClick={() => editTask(i)}
                  className="bg-blue-700 px-4 py-1 rounded-2xl font-semibold text-white"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
