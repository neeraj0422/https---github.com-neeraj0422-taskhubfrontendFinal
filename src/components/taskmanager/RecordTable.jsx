import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecordTable.scss';

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

  useEffect(() => {
    // Fetch records from the API
    axios.get("https://taskhubbackenddd.onrender.com/table/records").then((response) => {
      setRecords(response.data);
    });
  }, []);
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

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.S_NO}</td>
              <td>{record.Administration_number}</td>
              <td>{record.Company}</td>
              <td>
              <select
                  value={record.Basecone}
                  onChange={(e) =>
                    handleBaseconeStatusChange(record._id, e.target.value)
                  }
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Basecone === "pending"
                        ? "red"
                        : record.Basecone === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleBankStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Bank === "pending"
                        ? "red"
                        : record.Bank === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleSalaryEntryStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.SalaryEntry === "pending"
                        ? "red"
                        : record.SalaryEntry === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handlePayslipsStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Payslips === "pending"
                        ? "red"
                        : record.Payslips === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleDividendStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Dividend === "pending"
                        ? "red"
                        : record.Dividend === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleCorporatetaxStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Corporatetax === "pending"
                        ? "red"
                        : record.Corporatetax === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleVatStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.Vat === "pending"
                        ? "red"
                        : record.Vat === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                  onChange={(e) =>
                    handleAnnualTaxStatusChange(record._id, e.target.value)
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.AnnualTax === "pending"
                        ? "red"
                        : record.AnnualTax === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                    handleCashFlowStatementStatusChange(
                      record._id,
                      e.target.value
                    )
                  }
                  
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.CashFlowStatement === "pending"
                        ? "red"
                        : record.CashFlowStatement === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.ProfitLoss === "pending"
                        ? "red"
                        : record.ProfitLoss === "inprogress"
                        ? "yellow"
                        : "#03C04A",
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
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor:
                      record.TrialBalance === "pending"
                        ? "red"
                        : record.TrialBalance === "inprogress"
                        ? "yellow"
                        : "#03C04A",
                  }}
                >
                  {TrialBalanceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
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
