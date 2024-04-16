import React from 'react'
import './AllEmployees.css'

function AllEmployees() {
  return (
    <div className='employees'>
      <div classNameName="employee-list-container">
        <ul className="employee-list">
          <li className="employee-item">
            <div className="employee-details">
              <h3 className="employee-name">John Doe</h3>
              <p className="employee-email">john.doe@example.com</p>
              <p className="employee-department">Department: IT</p>
            </div>
          </li>
          <li className="employee-item">
            <div className="employee-details">
              <h3 className="employee-name">Jane Smith</h3>
              <p className="employee-email">jane.smith@example.com</p>
              <p className="employee-department">Department: HR</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AllEmployees
