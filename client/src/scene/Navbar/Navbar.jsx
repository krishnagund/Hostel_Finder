import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../../states";
import { useEffect, useState } from "react";
import { setSearch } from "../../states";
export default function Navbar() {
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(user);
  const dispatch = useDispatch();
  const [search, setStateSearch] = useState("");
  useEffect(() => {
    dispatch(setSearch({ search: search }));
  }, [search]);
  return (
    <nav style={{ position: isAuth ? "" : "fixed" }}>
      <Link to="/home">
        <h2>Hostel Finder</h2>
      </Link>
      {isAuth && (
        <div className="search" style={{}}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "20rem",
              height: "2rem",
              borderRadius: "1rem",
              padding: "1rem",
              border: "none !important",
            }}
            value={search}
            onChange={(e) => setStateSearch(e.target.value)}
          />
        </div>
      )}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!isAuth ? (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button onClick={() => dispatch(setLogout())}>Logout</button>
        )}
      </div>
    </nav>
  );
}
