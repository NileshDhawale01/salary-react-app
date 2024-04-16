import React from 'react'
import './AddEmployee.css'

function AddEmployee() {
    return (
        <div className='form-container'>
            <div className='form-head'>
                Add Employee Form
            </div>
            <form className='form'>
                <div className='form-data'>
                    <input type='text' name='employeeName' />
                </div>
                <div className='form-data'>
                    <input type='email' name='email' />
                </div>
                <div className='form-data'>
                    <input type='number' name='departmentId' />
                </div>
                <div className='form-data'>
                    <input type='password' name='password' />
                </div>
                <button className='form-submit' type='submit'>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee
