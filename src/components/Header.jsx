import './header.scss';
import logo from '../components/logoo.png'; // Import the logo.png image

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
         
          <h3>TASK HuB</h3>
          <img className='img' src={logo} alt="Task Hub Logo" /> {/* Display the logo image */}
        </div>
        <div className="header__buttons">
          <button>Sign In</button>
          <button>Sign Out</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
