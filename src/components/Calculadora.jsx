import { useState } from "react";

const CalculadoraBotoes = () => {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState(null);

  const adicionar = (valor) => {
    setInput((prev) => prev + valor);
  };

};

export default CalculadoraBotoes;