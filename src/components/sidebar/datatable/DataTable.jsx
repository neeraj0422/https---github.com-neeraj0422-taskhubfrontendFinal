import React from "react";

const DataTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>Administration number</th>
            <th>Company</th>
            <th>basecone</th>
            <th>Bank</th>
            <th>Salary entree</th>
            <th>Payslips</th>
            <th>Dividend</th>
            <th>Corporatetax</th>
            <th>VAT</th>
            <th>Annual tax</th>
            <th>Cash Flow Statement</th>
            <th>Profit&Loss</th>
            <th>Trial Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1008</td>
            <td>van Vliet E commerce</td>
            <td>Completed</td>
            <td>In Progress</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1013</td>
            <td>SIMU Lifestyle</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>1015</td>
            <td>EGB logistics</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
