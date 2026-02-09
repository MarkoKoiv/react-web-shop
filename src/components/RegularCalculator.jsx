import { useState } from "react";

function RegularCalculator() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  function addNumber(num) {
    setDisplay(prev => {
      if (prev === "0" || resetDisplay) {
        setResetDisplay(false);
        return num;
      }
      return prev + num;
    });
  }

  function addDecimal() {
    setDisplay(prev => (prev.includes(".") ? prev : prev + "."));
  }

  function backspace() {
    setDisplay(prev => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  }

  function clear() {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setResetDisplay(false);
  }

  function chooseOperator(op) {
    if (operator && !resetDisplay) {
      calculate();
    }
    setPrevious(Number(display));
    setOperator(op);
    setResetDisplay(true);
  }

  function calculate() {
    if (previous === null || operator === null) return;

    const current = Number(display);
    let result;

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        if (current === 0) {
          setDisplay("Error");
          setPrevious(null);
          setOperator(null);
          return;
        }
        result = previous / current;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPrevious(null);
    setOperator(null);
    setResetDisplay(true);
  }

  const btn =
    "bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-3 text-lg";
  const op =
    "bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg py-3 text-lg";

  return (
    <div className="flex justify-center items-center">
      <div className="w-80 bg-white rounded-2xl shadow-xl p-4 border">

        {/* Display */}
        <div className="bg-gray-100 text-gray-900 text-right text-3xl rounded-lg px-4 py-3 mb-4 border overflow-hidden">
          {display}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={backspace}
            className="col-span-2 bg-gray-300 hover:bg-gray-400 rounded-lg py-3"
          >
            ⌫
          </button>

          <button onClick={() => chooseOperator("/")} className={op}>
            ÷
          </button>

          <button
            onClick={clear}
            className="bg-red-500 text-white rounded-lg py-3"
          >
            C
          </button>

          {[7, 8, 9].map(n => (
            <button
              key={n}
              onClick={() => addNumber(String(n))}
              className={btn}
            >
              {n}
            </button>
          ))}
          <button onClick={() => chooseOperator("*")} className={op}>
            ×
          </button>

          {[4, 5, 6].map(n => (
            <button
              key={n}
              onClick={() => addNumber(String(n))}
              className={btn}
            >
              {n}
            </button>
          ))}
          <button onClick={() => chooseOperator("-")} className={op}>
            −
          </button>

          {[1, 2, 3].map(n => (
            <button
              key={n}
              onClick={() => addNumber(String(n))}
              className={btn}
            >
              {n}
            </button>
          ))}
          <button onClick={() => chooseOperator("+")} className={op}>
            +
          </button>

          <button
            onClick={() => addNumber("0")}
            className="col-span-2 bg-gray-100 hover:bg-gray-200 rounded-lg py-3 text-lg"
          >
            0
          </button>

          <button onClick={addDecimal} className={btn}>
            .
          </button>

          <button
            onClick={calculate}
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 text-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegularCalculator;
