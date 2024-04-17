import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './AddEmployee.css'

function AddEmployee() {

    const [employee, setEmployee] = useState({
        "employeeName": "",
        "employeeContact": "",
        "email": "",
        "password": "",
        "departmentsDto": {
            "departmentId": 1
        }
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(preState => ({
            ...preState,
            [name]: value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/employee', employee)
            .then(response => {

                setLoading(false)
                console.log("Success :: ", response)
                setEmployee({
                    "employeeName": "",
                    "employeeContact": "",
                    "email": "",
                    "password": "",
                    "departmentsDto": {
                        "departmentId": 1
                    }
                })
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    }
    return (
        <div className='form-container' onSubmit={onSubmit}>
            <div className='form-head'>
                Add Employee Form
            </div>
            <form className='form'>
                <div className='form-data'>
                    <input type='text' name='employeeName' value={employee.employeeName} onChange={handleChange} placeholder='Employee Name' />
                </div>
                <div className='form-data'>
                    <input type='email' name='email' value={employee.email} onChange={handleChange} placeholder='Email' />
                </div>
                <div className='form-data'>
                    <input type='text' name='employeeContact' value={employee.employeeContact} onChange={handleChange} placeholder='Contact' />
                </div>
                <div className='form-data'>
                    <input type='number' name='departmentId' value={employee.departmentsDto.departmentId} placeholder='Department' />
                </div>
                <div className='form-data'>
                    <input type='password' name='password' value={employee.password} onChange={handleChange} placeholder='Password' />
                </div>
                <button className='form-submit' type='submit'>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee
