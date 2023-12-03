import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.scss';
import { useEffect } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getAllTasks } from '../../redux/taskSlice';
import man from '../../components/mann.png';

const Dashboard = () => {
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  let pendingTask = [];
  let completedTask = [];
  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].status === 'todo') {
      pendingTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === 'done') {
      completedTask.push(AllTasks[i]);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);

  return (
    <div>
      <div className='dashboard'>
        <div className='dashboard__left'>
          <Sidebar />
        </div>
        <div className='dashboard__right'>
          <div>
			
		  <div className='dashboard__rightContent'>
            <h2>Task Status Dashboard</h2>
			
            <div className='taskcount'>
              <div className='todo box' style={{ color: 'white' }}>Todo - {pendingTask.length}</div>
              <div className='done box' style={{ color: 'white' }}>Complete - {completedTask.length}</div>
            </div>
            <div className='createButton'>
              <Link to='/taskmanager' className='button'>
                Task Board
              </Link>
            </div>

            {/* Use man image as background */}
           

          </div>
		  <div className="background-image">
              <img
                src={man}
                alt="Your Logo"
                className="manlogo"
              />
            </div>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
