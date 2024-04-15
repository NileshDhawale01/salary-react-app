import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-head'>
      <div className='sidebar-one'>Salary App</div>
      <div className='sidebar-two'>
        <div><Link to={'/allemployees'}>All Employees</Link></div>
        <div><Link to={'/addEmployee'}>Add Employee</Link></div>
        <div><Link to={'/salary'}>Salary Report</Link></div>
        <div><Link to={'/addSalary'}>Add Salary</Link></div>
      </div>
    </div>
  )
}

export default Sidebar
