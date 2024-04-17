import React from 'react'
import './AllEmployees.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AllEmployees() {


  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    axios.get(`http://localhost:8080/employee`)
      .then(response => {
        setLoading(false)
        setUsers(response.data)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error ::{error}</div>
  }

  return (
    <div className='employees'>
      <div className="employee-list-containe">
        <ul className="employee-list">
          {
            users.data.map(u => (
              <li className="employee-item">
                <div className="employee-details">
                  <h3 className="employee-name">{u.employeeName}</h3>
                  <p className="employee-email">{u.employeeContact}</p>
                  <p className="employee-department">{u.email}</p>
                  <p className="employee-department">{u.departmentsDto.departmentName}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default AllEmployees
