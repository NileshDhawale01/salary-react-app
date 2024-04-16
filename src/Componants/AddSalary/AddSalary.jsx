import React from 'react'
import './AddSalary.css'

function AddSalary() {
    return (
        <div className='salaey-form-container'>
            <div className='salaey-form-head'>
                Add Salary Form
            </div>
            <form className='salaey-form'>
                <div className='salaey-form-data'>
                    <input type='number' name='totalWorkingDays' />
                </div>
                <div className='salaey-form-data'>
                    <input type='number' name='salaryAmount' />
                </div>
                <div className='salaey-form-data'>
                    <input type='number' name='employeeId' />
                </div>
                <div className='salaey-form-data'>
                    <input type='datetime-local' name='salaryFromDate' />
                </div>
                <div className='salaey-form-data'>
                    <input type='datetime-local' name='salaryToDate' />
                </div>
                <button className='salaey-form-submit' type='submit'>Add Employee</button>
            </form>
        </div>
    )
}

export default AddSalary
