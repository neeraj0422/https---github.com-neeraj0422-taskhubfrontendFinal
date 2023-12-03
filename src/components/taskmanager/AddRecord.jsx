import React, { useState } from 'react';
import axios from 'axios';

const AddRecord = ({ onAdd }) => {
  const [modalOpen, setModalOpen] = useState(false); // Added modalOpen state

  const [formData, setFormData] = useState({
    S_NO: '',
    Administration_number: '',
    Company: '',
    status: 'inprogress',
    // Add other fields based on YourModel schema
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/table/records', formData).then((response) => {
      onAdd(response.data);
      setFormData({
        S_NO: '',
        Administration_number: '',
        Company: '',
        status: 'inprogress',
        // Reset other form fields based on YourModel schema
      });
      closeModal(); // Close the modal after submission
    });
  };

  return (
    <div>
      <button onClick={openModal}>Create Task</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close">
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label>S.NO.:</label>
              <input
                type="number"
                name="S_NO"
                value={formData.S_NO}
                onChange={handleChange} // Use handleChange for input fields
              />
              <label>Administration number:</label>
              <input
                type="text"
                name="Administration_number"
                value={formData.Administration_number}
                onChange={handleChange} // Use handleChange for input fields
              />
              <label>Company :</label>
              <input
                type="text"
                name="Company"
                value={formData.Company}
                onChange={handleChange} // Use handleChange for input fields
              />
              {/* Add other form fields based on YourModel schema */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;
