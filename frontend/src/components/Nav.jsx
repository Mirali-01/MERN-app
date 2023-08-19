import { React, useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaDumbbell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [motivation, setMotivation] = useState("");

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    const fetchActivity = () => {
      setInterval(() => {
        fetch("https://www.boredapi.com/api/activity")
          .then((response) => response.json())
          .then((data) => {
            // console.log(data.activity);
            setMotivation(data.activity);
          })
          .catch((error) => console.error(error));
      }, 5000);
    };

    fetchActivity();

    return () => clearInterval(fetchActivity);
  }, []);

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">
          <FaDumbbell size="13vh" />
        </Link>
      </div>
      <div className="API">
        <h5>
          Activity
          <br />
          {motivation}
        </h5>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <div>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
