import { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All fields are required");
      return;
    }

    if (editId) {
      // UPDATE
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, name, email } : item
        )
      );
      setEditId(null);
    } else {
      // ADD
      setTodos([...todos, { id: Date.now(), name, email }]);
    }

    setName("");
    setEmail("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo = (todo) => {
    setName(todo.name);
    setEmail(todo.email);
    setEditId(todo.id);
  };

  const cancelEdit = () => {
    setEditId(null);
    setName("");
    setEmail("");
  };

  return (
    <>
      <nav className="bg-red-400 p-4 text-4xl font-bold text-center fixed top-0 w-full">
        Record Keeping
      </nav>

      <section className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="bg-amber-300 w-96 shadow-xl rounded-xl">
          <form className="p-6" onSubmit={handleSubmit}>
            <h2 className="text-center text-xl font-bold mb-4">
              {editId ? "Edit Record" : "Add Record"}
            </h2>

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

            <div className="flex justify-center gap-3">
              <button
                type="submit"
                className="h-[40px] w-24 bg-blue-500 rounded-md font-semibold text-white"
              >
                {editId ? "Update" : "Add"}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="h-[40px] w-24 bg-gray-400 rounded-md font-semibold"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* SHOW TODOS */}
          <div className="px-6 mt-4 max-h-[200px] overflow-y-auto bg-red-200 rounded-b-xl">
            {todos.length === 0 && (
              <p className="text-center text-gray-600 py-4">
                No records found
              </p>
            )}

            {todos.map((item) => (
              <div
                key={item.id}
                className="bg-white p-2 my-2 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTodo(item)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(item.id)}
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
