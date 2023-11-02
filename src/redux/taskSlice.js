import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initalTask = localStorage.getItem('task')
	? JSON.parse(localStorage.getItem('task'))
	: null;

const initialState = {
	TaskData: initalTask,
	AllTasks: {},
};
export const taskSlice = createSlice({
	name: 'Task',
	initialState,

	reducers: {
		taskAddedSuccessfully: (state, action) => {
			state.TaskData = action.payload;
		},
		taskAddFailure: (state) => {
			return state;
		},
		getAllTaskSuccess: (state, action) => {
			state.AllTasks = action.payload;
		},
		getAllTaskFailure: (state) => {
			return state;
		},

		editTaskSuccess: (state, action) => {
			state.TaskData = action.payload;
		},

		deleteSuccess: (state, action) => {
			state.TaskData = action.payload;
		},
		deletefail: (state) => {
			return state;
		},
	},
});

export const {
	taskAddFailure,
	taskAddedSuccessfully,
	getAllTaskFailure,
	getAllTaskSuccess,
	deleteSuccess,
	deletefail,
	editTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, deadline, id, token) => async (dispatch) => {
	try {
		const taskData = {
			task,
			deadline,
			id,
		};
		const response = await axios.post('https://taskhubbackenddd.onrender.com/task/add', taskData);
		if (response.status === 200) {
			localStorage.setItem('task', JSON.stringify(response.data));
			dispatch(taskAddedSuccessfully(response.data));
			toast.success('Task added successfully');
			window.location.reload();
		} else {
			dispatch(taskAddFailure());
			toast.error('Failed to add task. Please check your request.');
		}
	} catch (error) {
		dispatch(taskAddFailure());
		if (error.response) {
			toast.error(`Error adding task: ${error.response.data.message}`);
		} else if (error.message) {
			toast.error(`Error adding task: ${error.message}`);
		} else {
			toast.error('An error occurred while adding the task.');
		}
	}

};

export const getAllTasks = (token, id) => async (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			id,
		},
	};

	try {
		const response = await axios.get(
			'http://localhost:4000/task/tasks',
			config
		);
  console.log("response",response)
		if (response.status === 200) {
			dispatch(getAllTaskSuccess(response.data));
		}
	} catch (error) {
		dispatch(getAllTaskFailure());
		if (error.response) {
			toast.error(`Error fetching tasks: ${error.response.data.message}`);
		} else if (error.message) {
			toast.error(`Error fetching tasks: ${error.message}`);
		} else {
			toast.error('An error occurred while fetching tasks.');
		}
	}
};

export const arrowClick = (item, string,userid) => async () => {
	let taskData = {
		id: item._id,
		status: item.status,
		string,
		modifiedby:userid
	};

	try {
		let response = await axios.put(
			`https://taskhubbackenddd.onrender.com/task/${taskData.id}`,
			taskData
		);

		if (response.status === 200) {
			window.location.reload();
		}
	} catch (error) {
		console.log(error);
		toast.error('An error occurred while updating the task.');
	}
};

export const deleteItem = (id) => async (dispatch) => {
	try {
		let res = await axios.delete(`https://taskhubbackenddd.onrender.com/task/${id}`);
		if (res.status === 200) {
			dispatch(deleteSuccess());
			toast.success('Task deleted successfully');
			window.location.reload();
		} else {
			dispatch(deletefail());
			toast.error('Failed to delete task. Please check your request.');
		}
	} catch (error) {
		console.log(error);
		toast.error('An error occurred while deleting the task.');
	}
};
