import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecordTable.scss';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PieChart from './PieChart';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const RecordTable = () => {
  const [records, setRecords] = useState([]);
  const [PayslipsOptions] = useState(["pending", "inprogress", "completed"]);
  const [BaseconeOptions] = useState(["pending", "inprogress", "completed"]);
  const [BankOptions] = useState(["pending", "inprogress", "completed"]);
  const [SalaryEntryOptions] = useState(["pending", "inprogress", "completed"]);
  const [DividendOptions] = useState(["pending", "inprogress", "completed"]);
  const [CorporatetaxOptions] = useState([
    "pending",
    "inprogress",
    "completed",
  ]);
  const [VatOptions] = useState(["pending", "inprogress", "completed"]);
  const [AnnualTaxOptions] = useState(["pending", "inprogress", "completed"]);
  const [CashFlowStatementOptions] = useState([
    "pending",
    "inprogress",
    "completed",
  ]);
  const [ProfitLossOptions] = useState(["pending", "inprogress", "completed"]);
  const [TrialBalanceOptions] = useState([
    "pending",
    "inprogress",
    "completed",
  ]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPie, setShowPie] = useState(false);
  const [pieChartData, setPieChartData] = useState({});
const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (record) => {
    const sums = calculateRowSums(record);
    const data = {
      labels: ['Pending', 'In Progress', 'Completed'],
      datasets: [
        {
          data: [sums.pending, sums.inprogress, sums.completed],
          backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        },
      ],
    };

    setPieChartData(data);
    setSelectedCompany(record.Company);
    setShowPie(true);
  };
  // Define the calculateRowSums function
  const calculateRowSums = (record) => {
    const tasks = ["Basecone", "Bank", "SalaryEntry", "Payslips", "Dividend", "Corporatetax", "Vat", "AnnualTax", "CashFlowStatement", "ProfitLoss", "TrialBalance"];

    const sums = {
      pending: tasks.reduce((sum, task) => sum + (record[task] === "pending" ? 1 : 0), 0),
      inprogress: tasks.reduce((sum, task) => sum + (record[task] === "inprogress" ? 1 : 0), 0),
      completed: tasks.reduce((sum, task) => sum + (record[task] === "completed" ? 1 : 0), 0),
    };

    return sums;
  };



  useEffect(() => {
    // Fetch records from the API
    axios.get(`https://taskhubbackenddd.onrender.com/table/records?month=${selectedMonth}&year=${selectedYear}`).then((response) => {
      setRecords(response.data);
    });
  }, [selectedMonth, selectedYear]);
  const handleBaseconeStatusChange = (id, Basecone) => {
    // Update the Basecone of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Basecone })
      .then(() => {
        // Update the local state with the updated Basecone
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, Basecone } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleBankStatusChange = (id, Bank) => {
    // Update the Bank of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Bank })
      .then(() => {
        // Update the local state with the updated Bank
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, Bank } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleSalaryEntryStatusChange = (id, SalaryEntry) => {
    // Update the SalaryEntry of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { SalaryEntry })
      .then(() => {
        // Update the local state with the updated SalaryEntry
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, SalaryEntry } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handlePayslipsStatusChange = (id, Payslips) => {
    // Update the Payslips of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Payslips })
      .then(() => {
        // Update the local state with the updated Payslips
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, Payslips } : record
        );
        setRecords(updatedRecords);
      });
  };

  const handleDividendStatusChange = (id, Dividend) => {
    // Update the Dividend of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Dividend })
      .then(() => {
        // Update the local state with the updated Divident
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, Dividend } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleCorporatetaxStatusChange = (id, Corporatetax) => {
    // Update the Corporatetax of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Corporatetax })
      .then(() => {
        // Update the local state with the updated  Corporatetax
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, Corporatetax } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleVatStatusChange = (id, Vat) => {
    // Update the Vat of a record
    axios.put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { Vat }).then(() => {
      // Update the local state with the updated Vat
      const updatedRecords = records.map((record) =>
        record._id === id ? { ...record, Vat } : record
      );
      setRecords(updatedRecords);
    });
  };
  const handleAnnualTaxStatusChange = (id, AnnualTax) => {
    // Update the AnnualTax of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { AnnualTax })
      .then(() => {
        // Update the local state with the updated AnnualTax
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, AnnualTax } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleCashFlowStatementStatusChange = (id, CashFlowStatement) => {
    // Update the CashFlowStatement of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { CashFlowStatement })
      .then(() => {
        // Update the local state with the updated CashFlowStatement
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, CashFlowStatement } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleProfitLossStatusChange = (id, ProfitLoss) => {
    // Update the ProfitLossof a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { ProfitLoss })
      .then(() => {
        // Update the local state with the updated ProfitLoss
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, ProfitLoss } : record
        );
        setRecords(updatedRecords);
      });
  };
  const handleTrialBalanceStatusChange = (id, TrialBalance) => {
    // Update the TrialBalance of a record
    axios
      .put(`https://taskhubbackenddd.onrender.com/table/records/${id}`, { TrialBalance })
      .then(() => {
        // Update the local state with the updated TrialBalance
        const updatedRecords = records.map((record) =>
          record._id === id ? { ...record, TrialBalance } : record
        );
        setRecords(updatedRecords);
      });
  };

  const handleDelete = (id) => {
    // Delete a record
    axios.delete(`https://taskhubbackenddd.onrender.com/table/records/${id}`).then(() => {
      // Remove the deleted record from the local state
      const updatedRecords = records.filter((record) => record._id !== id);
      setRecords(updatedRecords);
    });
  };

  return (
    <div>

     <div className="month">
  <span className="label">Select Month:</span>
  <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
    {months.map((month, index) => (
      <option key={index + 1} value={index + 1}>{month}</option>
    ))}
  </select>
</div>

<div className="year">
  <span className="label">Select Year:</span>
  <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
    {[...Array(10).keys()].map((year) => (
      <option key={new Date().getFullYear() - 5 + year} value={new Date().getFullYear() - 5 + year}>
        {new Date().getFullYear() - 5 + year}
      </option>
    ))}
  </select>
</div>


      <table>
        <thead>
          <tr>
            <th>S.NO.</th>

            <th>Administration number</th>

            <th>Company </th>

            <th>Basecone</th>

            <th>Bank</th>

            <th>Salary Entry</th>

            <th>Payslips</th>

            <th>Dividend</th>

            <th>Corporatetax</th>

            <th>VAT</th>

            <th>Annual tax</th>

            <th>Cash Flow Statement</th>

            <th>Profit&Loss</th>

            <th>Trial Balance</th>
            <th>Pending Tasks</th>
            <th>inProgress Tasks</th>
            <th>Completed Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.S_NO}</td>
              <td>{record.Administration_number}</td>
              <td>
                <button
                  className="pie-button"
                  onClick={() => handleButtonClick(record)}
              
                >
                  {record.Company}
                </button>
                {showPie && selectedCompany && (
  <div>
    {/* Render the chart based on the selected company */}
    <Doughnut data={pieChartData} />
  </div>
)}
              </td>
              
              <td>
              <select
  value={record.Basecone}
  onChange={(e) => handleBaseconeStatusChange(record._id, e.target.value)}
  style={{
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Basecone === "pending"
        ? "red"
        : record.Basecone === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {BaseconeOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.Bank}
  onChange={(e) => handleBankStatusChange(record._id, e.target.value)}
  style={{
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Bank === "pending"
        ? "red"
        : record.Bank === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {BankOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.SalaryEntry}
  onChange={(e) => handleSalaryEntryStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.SalaryEntry === "pending"
        ? "red"
        : record.SalaryEntry === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {SalaryEntryOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.Payslips}
  onChange={(e) => handlePayslipsStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Payslips === "pending"
        ? "red"
        : record.Payslips === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {PayslipsOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>

              <td>
              <select
  value={record.Dividend}
  onChange={(e) => handleDividendStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Dividend === "pending"
        ? "red"
        : record.Dividend === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {DividendOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.Corporatetax}
  onChange={(e) => handleCorporatetaxStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Corporatetax === "pending"
        ? "red"
        : record.Corporatetax === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {CorporatetaxOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.Vat}
  onChange={(e) => handleVatStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.Vat === "pending"
        ? "red"
        : record.Vat === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {VatOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.AnnualTax}
  onChange={(e) => handleAnnualTaxStatusChange(record._id, e.target.value)}
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.AnnualTax === "pending"
        ? "red"
        : record.AnnualTax === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {AnnualTaxOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.CashFlowStatement}
  onChange={(e) =>
    handleCashFlowStatementStatusChange(record._id, e.target.value)
  }
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.CashFlowStatement === "pending"
        ? "red"
        : record.CashFlowStatement === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {CashFlowStatementOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.ProfitLoss}
  onChange={(e) =>
    handleProfitLossStatusChange(record._id, e.target.value)
  }
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.ProfitLoss === "pending"
        ? "red"
        : record.ProfitLoss === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {ProfitLossOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>
              <select
  value={record.TrialBalance}
  onChange={(e) =>
    handleTrialBalanceStatusChange(record._id, e.target.value)
  }
  style={{
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "border 0.3s, color 0.3s",
    border: `2px solid ${
      record.TrialBalance === "pending"
        ? "red"
        : record.TrialBalance === "inprogress"
        ? "yellow"
        : "green"
    }`,
  }}
>
  {TrialBalanceOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </td>
              <td>{calculateRowSums(record).pending}</td>
            <td>{calculateRowSums(record).inprogress}</td>
            <td>{calculateRowSums(record).completed}</td>
              <td>
                <button onClick={() => handleDelete(record._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
     
    </div>
    
  );
};

export default RecordTable;
