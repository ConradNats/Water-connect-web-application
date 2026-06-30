import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Water Connect</h1>
        <p>Connecting watermen to rural households for clean and safe water</p>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Water Connect</h2>
          <p>Ensuring availability of clean and safe water to every household</p>
        </section>
      </main>
    </div>
  )
}

export default App
