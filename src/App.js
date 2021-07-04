import { useState } from 'react'

function App() {

  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = [ '/', '*', '+', '-', '.']

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) {
        return
      }


    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => { 
    const digits = [];

    for ( let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="button-digits hover:opacity-variant" onClick={() =>updateCalc(i.toString()) }>{i}</button>
      )

    }

    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if ( calc === '') {
      return
    }

    const value = calc.slice(0, -1)

    setCalc(value)
  }

  return (
    <div className="App bg-gray-100 flex min-h-screen items-center justify-center">
        <div className="calculator w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="display p-6 text-right bg-gray-900 text-gray-200 text-3xl font-light">
            { result ? <span className="text-lg text-gray-500">({result})</span> : '' }&nbsp; { calc || "0" }
          </div>
          <div className="operators flex">
            <button className="button-operators hover:opacity-variant" onClick={() =>updateCalc('/') }>/</button>
            <button className="button-operators hover:opacity-variant" onClick={() =>updateCalc('*') }>*</button>
            <button className="button-operators hover:opacity-variant" onClick={() =>updateCalc('+') }>+</button>
            <button className="button-operators hover:opacity-variant" onClick={() =>updateCalc('-') }>-</button> 

            <button className="button-operators hover:opacity-variant" onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits flex flex-wrap" >
            { createDigits() }
            <button className="button-digits hover:opacity-variant" onClick={() =>updateCalc('0') }>0</button>
            <button className="button-digits hover:opacity-variant" onClick={() =>updateCalc('.') }>.</button>
            <button className="button-digits hover:opacity-variant" onClick={calculate}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
