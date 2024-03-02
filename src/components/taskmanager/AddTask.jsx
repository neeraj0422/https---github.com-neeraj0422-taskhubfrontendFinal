import React, { useState,useEffect } from "react";
import "./addtask.scss";
import { addTask } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import calendarIcon from "../../images/calendar-icon.png";

const AddTask = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser, token } = auth;
  // Add this to the state
  const [selectedUser, setSelectedUser] = useState(null);
  const [state, setState] = useState({
    task: "",
    deadline: null,
  });
  const [users, setUsers] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  useEffect(() => {
    // Fetch users from the API endpoint
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://taskhubbackenddd.onrender.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Call the fetchUsers function
    fetchUsers();
  }, []); // The empty dependency array ensures that the effect runs only once on component mount


  const handleDateChange = (date) => {
    setState({
      ...state,
      deadline: date,
    });
    toggleDatePicker();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state.task && state.deadline && selectedUser) {
        const response = await dispatch(
          addTask(state.task, state.deadline, selectedUser, currentUser.id, token)
        );
        if (response) {
          toast.success("Task added successfully");
          setState({
            task: "",
            deadline: null,
          });
        } else {
          toast.error("Failed to add the task");
        }
      } else {
        toast.error("Both task and deadline are required to add a task.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the task");
    }
  };

  return (
    <div>
      <div className="addtask">
        <form action="" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="task"
            placeholder="Add your task"
            value={state.task}
            onChange={(e) => setState({ ...state, task: e.target.value })}
          />
       
       <select
            name='assignee'
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value={null}>
              Assign To
            </option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.username}
              </option>
            ))}
          </select>
          <button className="calendar-button" onClick={toggleDatePicker}>
            <img src={calendarIcon} alt="Calendar" />
          </button>
          {showDatePicker && (
            <DatePicker
              name="deadline"
              selected={state.deadline}
              onChange={handleDateChange}
              placeholderText="Select a deadline"
            />
          )}
          <button className="button">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
