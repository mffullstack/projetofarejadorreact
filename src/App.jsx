import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div>Bem-vindo ao Projeto Farejador</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
