import './App.css';
import { Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Header from './components/Header';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
