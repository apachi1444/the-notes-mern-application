import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {}, [userInfo]);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Ahmed Amine Application
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {userInfo ? (
              <>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/mes-notes"
                  >
                    <i className="fas fa-book"> Mes Notes </i>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"> &nbsp;{`${userInfo.name}`} </i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/profile">
                        <i className="fas fa-user"> Profile </i>
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="/" onClick={logoutHandler}>
                        <i className="fas fa-sign-in-alt"> Log Out </i>
                      </a>
                    </li>
                  </ul>
                </li>
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </>
            ) : (
              <li class="nav-item">
                <a class="nav-link" href="/Sign-in">
                  <i className="fas fa-user"> Connexion </i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
