
import Home from './pages/Home';
import Testinga from './pages/Testinga';
import Testingb from './pages/Testingb';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/testinga" element={<Testinga />} />  
      <Route path="/testingb" element={<Testingb />} />  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
