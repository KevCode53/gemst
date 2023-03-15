import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import './App.css'
// Import Layout Container
import Layout from '../containers/Layout'
// Import Pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Maintenances from '../pages/Maintenances'
import Register from '../pages/Register'
import Error404 from '../pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/maintenances' element={<Maintenances /> } />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='maintenances-register' element={<Register/>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
