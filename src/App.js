import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Componants/Sidebar/Sidebar';
import Header from './Componants/Header/Header';
import AllEmployees from './Componants/AllEmployees/AllEmployees';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/allemployees' element={<AllEmployees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
