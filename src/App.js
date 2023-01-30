import './App.css';
import { Route, Routes } from 'react-router-dom';
import Missions from './components/missions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
