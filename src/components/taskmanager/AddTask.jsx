import React, { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import calendarIcon from '../../images/calendar-icon.png';

const AddTask = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser, token } = auth;

  const [state, setState] = useState({
    task: '',
    deadline: null,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

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
      if (state.task && state.deadline) {
        const response = await dispatch(
          addTask(state.task, state.deadline, currentUser.id, token)
        );
        if (response) {
          toast.success('Task added successfully');
          setState({
            task: '',
            deadline: null,
          });
        } else {
          toast.error('Failed to add the task');
        }
      } else {
        toast.error('Both task and deadline are required to add a task.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the task');
    }
  };

  return (
    <div>
      <div className='addtask'>
        <form action='' onSubmit={handleSubmit}>
          <button
            className='calendar-button'
            onClick={toggleDatePicker}
          >
            <img src={calendarIcon} alt='Calendar' />
          </button>
          {showDatePicker && (
            <DatePicker
              name='deadline'
              selected={state.deadline}
              onChange={handleDateChange}
              placeholderText='Select a deadline'
            />
          )}
          <input
            type='text'
            name='task'
            placeholder='Add your task'
            value={state.task}
            onChange={(e) => setState({ ...state, task: e.target.value })}
          />
          <button className='button'>Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
