import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { MdOutlineTaskAlt } from "react-icons/md";
import perfil from "./assets/perfil.jpeg";
import { IoMdAddCircle } from "react-icons/io";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState({});

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Nueva función para guardar la edición
  const saveEdit = (index) => {
    if (editValue.trim() === "") return;
    const newTasks = tasks.map((task, i) => (i === index ? editValue : task));
    setTasks(newTasks);
    setEditIndex(null);
    setEditValue("");
  };

  const toggleComplete = (index) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <div className="bg-blue-700 relative p-4">
        <h1 className="text-white font-mono text-center text-2xl">
          Mi lista de Tareas
        </h1>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
          <h2 className="bg-white rounded-full px-3 py-1 font-mono">
            Pineda Castillejos Liam
          </h2>
          <div className="h-12 w-12 rounded-full overflow-hidden mt-2">
            <img src={perfil} />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 mt-4">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Escribe una tarea..."
          className="border border-gray-400 rounded-sm px-20 py-2"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 rounded-sm text-white py-2 px-5 hover:bg-blue-800 cursor-pointer"
        >
          <IoMdAddCircle className="text-2xl" />
        </button>
      </div>

      <ul className="flex flex-col items-center mt-4 gap-2 w-full font-mono">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center gap-2 w-full max-w-md"
            style={{ minWidth: "300px" }}
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border border-gray-400 rounded-sm p-1 flex-grow"
                  style={{ minWidth: 0 }}
                />
                <button
                  onClick={() => saveEdit(index)}
                  className="bg-green-600 text-white rounded-sm px-2 py-1 hover:bg-green-700 flex-shrink-0"
                >
                  <MdOutlineFileDownloadDone />
                </button>
                <button
                  onClick={() => {
                    setEditIndex(null);
                    setEditValue("");
                  }}
                  className="bg-gray-400 text-white rounded-sm px-2 py-1 hover:bg-gray-500 flex-shrink-0"
                >
                  <TiCancel />
                </button>
              </>
            ) : (
              <>
                <MdOutlineTaskAlt
                  onClick={() => toggleComplete(index)}
                  className={`cursor-pointer scale-150 mr-6 ${
                    completedTasks[index] ? "text-green-600" : "text-black"
                  }`}
                />
                <span className="flex-grow truncate">{task}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-600 text-white rounded-sm py-1 px-2 ml-2 hover:bg-red-700 cursor-pointer flex-shrink-0"
                >
                  <MdDeleteForever />
                </button>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditValue(task);
                  }}
                  className="bg-blue-500 text-white rounded-sm px-2 py-1 ml-2 hover:bg-blue-700 cursor-pointer flex-shrink-0"
                >
                  <FaRegEdit />
                </button>
                <button></button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
