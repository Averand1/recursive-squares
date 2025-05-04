import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router';
import Square from './components/Square';



const Home = () => {
  const navigate = useNavigate()


  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem'}}>
      <button onClick={() => navigate('/recursive-squares/task1')}>Recursive Grid</button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  )

}



function App() {
  return (
    <Router basename='/recursive-squares'>
      <Routes>
        <Route path="/recursive-squares" element={<Home/>}/>
        <Route path="/recursive-squares/task1" element={<Square/>}/>
        <Route path="/task2" element={<Home/>}/>
        <Route path="/task3" element={<Home/>}/>
        <Route path="/task4" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;