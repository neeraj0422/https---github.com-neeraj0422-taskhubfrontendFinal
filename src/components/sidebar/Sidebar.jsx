import './Sidebar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from './datatable/DataTable';
import speed from '../../components/speed.gif'
import user from '../../components/user.png'

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div>
      <ul className='sidebar'>
      
      <div className="user-info">
  <img src={user} alt="Your Logo" className="logoo" />
  <h5>{currentUser.username}</h5>
</div>
        <li className='list-item'>
          <Link to='/dashboard'>Dashboard</Link>

        </li>
        <li className='list-item'>
          <Link to='/data'>Data Table</Link> {/* Use the Link component to navigate to '/home' */}
        </li>
        <div >
            <img
              src={speed}
              alt="Your Logo"
              className="logo"
            />
          </div>
      </ul>
    </div>
  );
};

export default Sidebar;
