import { Link } from 'react-router-dom';
import { useLogin } from './LoginContext'; // Assuming you have a LoginContext for managing login state

function Footer() {
  const { isLoggedIn, logout } = useLogin(); // Assuming isLoggedIn and logout functions are provided by your LoginContext

  return (
    <>
      <div id="footer">
        <div className="container text-center">
          {isLoggedIn ? (
            <p>
              <button onClick={logout}>Logout</button>
            </p>
          ) : (
            <p>
              <Link to="/login">Admin Login</Link>
            </p>
          )}
          <p>
            &copy; 2024 Tatvam Ceramic LLP
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
