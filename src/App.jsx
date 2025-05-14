import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Add a section with a background image that spans the page */}
      <div className="header">
        <h1 className="name">Ivan Bao</h1>
      </div>

      {/* Add a counter section (you can remove this if you don't need it) */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
