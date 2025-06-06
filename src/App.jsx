import { useState } from "react";

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  const [counter, setCounter] = useState(0);
  const [fondo, setFondo] = useState("bg-gray-500");
  const colorTexto = fondo === "bg-black" ? "text-white" : "text-white";
  const botonColor =
    fondo === "bg-black" ? "bg-green-700 text-white" : "bg-blue-600 text-white";
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-screen gap-4 ${fondo}`}
      >
        <button
          onClick={() => setMostrar(!mostrar)}
          className={`${botonColor} px-2 py-1 rounded-sm`}
        >
          {mostrar ? "Ocultar Contador" : "Mostrar Contador"}
        </button>
        {mostrar && (
          <>
            <p className={`${colorTexto} text-2xl font-bold`}>{counter}</p>
            <button
              className={`${botonColor} rounded-sm px-2 py-1`}
              onClick={() => setCounter(counter + 1)}
            >
              Aumentar
            </button>
            <button
              disabled={counter === 0}
              className={`${botonColor} rounded-sm px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={() => setCounter(counter - 1)}
            >
              Disminuir
            </button>
            <button
              className={`${botonColor} rounded-sm px-2 py-1`}
              onClick={() => setFondo("bg-black")}
            >
              Cambiar fondo a oscuro
            </button>
            <button
              className={`${botonColor} rounded-sm px-2 py-1`}
              onClick={() => setFondo("bg-gray-500")}
            >
              Regresar al color original
            </button>
          </>
        )}
      </div>
    </>
  );
}
