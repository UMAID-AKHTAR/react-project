import { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const add = (e) => {
    e.preventDefault();

    if (!name || !email/*name.trim() === "" || email.trim() === ""*/) {
      alert("All fields are required");
      return;
    }

    if (editIndex !== null) {
      // UPDATE
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { name, email };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // ADD
      setTodos([...todos, { name, email }]);
    }

    setName("");
    setEmail("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setName(todos[index].name);
    setEmail(todos[index].email);
    setEditIndex(index);
  };

  return (
    <>
      <nav className="bg-red-400 p-4 text-4xl font-bold text-center fixed top-0 w-full">
        Record Keeping
      </nav>

      <section className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="bg-amber-300 w-96 shadow-xl rounded-xl">
          <form className="p-6" onSubmit={add}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[40px] border border-black rounded-md text-center"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[40px] my-4 border border-black rounded-md text-center"
            />

            <button
              type="submit"
              className="block mx-auto h-[40px] w-24 bg-blue-500 rounded-md font-semibold text-white"
            >
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </form>

          {/* Show Todos */}
          <div className="px-6 mt-4 max-h-[180px] overflow-y-auto bg-red-200 rounded-b-xl">
            {todos.length === 0 && (
              <p className="text-center text-gray-600 py-4">
                No records found
              </p>
            )}

            { todos.map((item, index) => (
              <div
                key={index}
                className="bg-white p-2 my-2 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTodo(index)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Todo;
