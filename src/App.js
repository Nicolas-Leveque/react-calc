
function App() {

  const createDigits = () => {
    const digits = [];

    for ( let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="button-digits hover:opacity-variant">{i}</button>
      )

    }

    return digits;
  }
  return (
    <div className="App bg-gray-100 flex min-h-screen items-center justify-center">
        <div className="calculator w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="display p-6 text-right bg-gray-900 text-gray-200 text-3xl font-light">
            <span className="text-lg text-gray-500">(0)</span> 0
          </div>
          <div className="operators flex">
            <button className="button-operators hover:opacity-variant">/</button>
            <button className="button-operators hover:opacity-variant">*</button>
            <button className="button-operators hover:opacity-variant">+</button>
            <button className="button-operators hover:opacity-variant">-</button> 

            <button className="button-operators hover:opacity-variant">DEL</button>
          </div>
          <div className="digits flex flex-wrap" >
            { createDigits() }
            <button className="button-digits hover:opacity-variant">0</button>
            <button className="button-digits hover:opacity-variant">.</button>
            <button className="button-digits hover:opacity-variant">=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
