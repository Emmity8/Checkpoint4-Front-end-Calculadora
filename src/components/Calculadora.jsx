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

};

export default CalculadoraBotoes;