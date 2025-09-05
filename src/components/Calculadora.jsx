import { useState } from "react";

const CalculadoraBotoes = () => {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState(null);

  const adicionar = (valor) => {
    setInput((prev) => prev + valor);
  };

  const limpar = () => {
    setInput("");
    setResultado(null);
  };

  const calcular = () => {
    try {
      setResultado(eval(input));
    } catch {
      setResultado("Erro");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen p-4">
      <div className="bg-purple-700 p-6 rounded-2xl w-full max-w-xs text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Calculadora</h1>

        <div className="bg-gray-100 h-16 flex items-center justify-end px-4 rounded-lg mb-4 text-xl font-mono text-gray-800">
          {resultado !== null ? resultado : input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={limpar} className="col-span-2 py-3 bg-red-600 text-white rounded-lg">C</button>
          <button onClick={() => adicionar("/")} className="py-3 bg-indigo-500 text-white rounded-lg">÷</button>
          <button onClick={() => adicionar("*")} className="py-3 bg-indigo-500 text-white rounded-lg">×</button>

          <button onClick={() => adicionar("7")} className="py-3 bg-gray-300 rounded-lg">7</button>
          <button onClick={() => adicionar("8")} className="py-3 bg-gray-300 rounded-lg">8</button>
          <button onClick={() => adicionar("9")} className="py-3 bg-gray-300 rounded-lg">9</button>
          <button onClick={() => adicionar("-")} className="py-3 bg-indigo-500 text-white rounded-lg">−</button>

          <button onClick={() => adicionar("4")} className="py-3 bg-gray-300 rounded-lg">4</button>
          <button onClick={() => adicionar("5")} className="py-3 bg-gray-300 rounded-lg">5</button>
          <button onClick={() => adicionar("6")} className="py-3 bg-gray-300 rounded-lg">6</button>
          <button onClick={() => adicionar("+")} className="py-3 bg-indigo-500 text-white rounded-lg">+</button>

          <button onClick={() => adicionar("1")} className="py-3 bg-gray-300 rounded-lg">1</button>
          <button onClick={() => adicionar("2")} className="py-3 bg-gray-300 rounded-lg">2</button>
          <button onClick={() => adicionar("3")} className="py-3 bg-gray-300 rounded-lg">3</button>
          <button onClick={calcular} className="row-span-2 py-3 bg-green-500 text-white rounded-lg">=</button>

          <button onClick={() => adicionar("0")} className="col-span-2 py-3 bg-gray-300 rounded-lg">0</button>
          <button onClick={() => adicionar(".")} className="py-3 bg-gray-300 rounded-lg">.</button>
        </div>
      </div>
    </div>
  );

};

export default CalculadoraBotoes;