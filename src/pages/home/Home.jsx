import './home.scss';
import Footer from '../../components/footer/Footer';
import '../../components/footer/Footer.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../components/logoa.gif'
// import logo from '../../components/logoo.png';

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="home">
      <div className="home__container">
        <div className="logo-container">
          <div className="box">
            <img
              src={logo}
              alt="Your Logo"
              className="logo"
            />
          </div>
        </div>

        <h2>Organize it all</h2>
        <p>With Task HuB</p>

        {currentUser && currentUser.token ? (
          <Link to="/dashboard" className="button">
            Get Started
          </Link>
        ) : (
          <Link to="/signin" className="button">
            Get Started
          </Link>
        )}
      </div>
	  <Footer/>
    </div>
  );
};

export default Home;
