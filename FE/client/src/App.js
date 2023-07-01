import './App.css';
import MyApp from './Main';
import History from './History';
// import { Typography} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MyApp/>} /> 
        <Route path="/history" element={<History/>} /> 
      </Routes>
    </div>
  );
}

export default App;
