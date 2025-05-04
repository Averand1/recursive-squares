import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router';
import Square from './components/Square';



const Home = () => {
  const navigate = useNavigate()


  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem'}}>
      <button onClick={() => navigate('/task1')}>Recursive Grid</button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  )

}




export default function App() {
  return (
    <Router basename='/recursive-squares'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/task1" element={<Square/>}/>
        <Route path="/task2" element={<Home/>}/>
        <Route path="/task3" element={<Home/>}/>
        <Route path="/task4" element={<Home/>}/>
      </Routes>
    </Router>
  )
}
