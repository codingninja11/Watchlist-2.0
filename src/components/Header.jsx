import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">WatchList</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/addmovie" className="btn">Add a Movie</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
