import './header.scss';
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

// Import your logo image
import logo from '../../components/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();
  };

  return (
    <div>
      <nav className='header'>
        <div className='header__logo'>
          {/* Add the logo image with inline styling */}
        
          {/* <h5>Task HuB</h5> */}
		  <img
            src={logo}
            alt='Your Logo'
            style={{
              width: '90px', // Adjust the width as needed
              marginRight: '10px',
              marginTop:'17px' // Adjust the margin as needed
            }}
          />
        </div>
        <div className='header__buttons'>
          {auth.currentUser && auth.currentUser.token ? (
            <Link to='/signin' className='button' onClick={handleClick}>
              SignOut
            </Link>
          ) : (
            <>
              <Link to='/signin' className='button'>
                SignIn
              </Link>
              <Link to='/signup' className='button'>
                SignUp
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
