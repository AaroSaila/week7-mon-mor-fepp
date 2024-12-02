import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {


  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));


  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Job Search</h1>
      </Link>
      <div className="links">
        {isAuthenticated && user ? (
          <div>
            <a href="/">Home</a>
            <a href="/add-job">Add Job</a>
            <span>{user.email}</span>
            <a href="/" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>
          </div>
        )
        }

      </div>
    </nav>
  );
}

export default Navbar;
