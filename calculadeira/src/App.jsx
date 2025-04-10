import React, { useState } from "react";
import "./App.css";

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operador) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Entrada inválida");
      return;
    }

    let res;
    switch (operador) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Divisão por zero";
        break;
      default:
        res = "Operador inválido";
    }

    setResultado(res.toString());
  };

  return (
    <div className="calculadora-container">
      <h1 className="titulo">Calculadeira</h1>

      <div className="entrada-operadores">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="campo"
        />

        <div className="botoes-operadores">
          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              className="botao-operador"
              onClick={() => calcular(op)}
            >
              {op}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="campo"
        />
      </div>

      <div className="resultado">
        {resultado || "Resultado"}
      </div>
    </div>
  );
}