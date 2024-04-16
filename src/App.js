import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Componants/Sidebar/Sidebar';
import Header from './Componants/Header/Header';
import AllEmployees from './Componants/AllEmployees/AllEmployees';
import AddEmployee from './Componants/AddEmployee/AddEmployee';
import SalaryReport from './Componants/SalaryReport/SalaryReport';
import AddSalary from './Componants/AddSalary/AddSalary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/allemployees' element={<AllEmployees />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/salary' element={<SalaryReport />} />
          <Route path='/addSalary' element={<AddSalary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
