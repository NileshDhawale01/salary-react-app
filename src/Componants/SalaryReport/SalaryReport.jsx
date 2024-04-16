import React from 'react'
import './SalaryReport.css'

function SalaryReport() {
    return (
        <div className="table-container">
    <table className="table">
        <thead>
            <tr>
                <th className="table-header">#</th>
                <th className="table-header">First</th>
                <th className="table-header">Last</th>
                <th className="table-header">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="table-data">1</th>
                <td className="table-data">Mark</td>
                <td className="table-data">Otto</td>
                <td className="table-data">@mdo</td>
            </tr>
            <tr>
                <th className="table-data">2</th>
                <td className="table-data">Jacob</td>
                <td className="table-data">Thornton</td>
                <td className="table-data">@fat</td>
            </tr>
            <tr>
                <th className="table-data">3</th>
                <td className="table-data">Larry the Bird</td>
                <td className="table-data">@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
    )
}

export default SalaryReport
