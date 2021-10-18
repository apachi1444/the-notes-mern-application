import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { login } from "../actions/userActions";

import { Form } from "react-bootstrap";
const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassShown, setisPassShown] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mes-notes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const togglePasswordVisibility = () => {
    setisPassShown((isPassShown) => !isPassShown);
  };
  return (
    <div className="outer">
      <div className="inner">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <h3>Log in</h3>

          {/* <div className="form-group my-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div> */}

          {/* <div className="form-group my-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div> */}

          <div className="wrapper">
            <input
              spellCheck="false"
              placeholder="Enter your mail here"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="fa fa-envelope icon"></span>
          </div>

          <div className="wrapper">
            <input
              spellCheck="false"
              placeholder="Enter your Password here "
              type={isPassShown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password ? (
              <i
                className={
                  isPassShown ? "fa fa-eye icon" : "fa fa-eye-slash icon"
                }
                onClick={togglePasswordVisibility}
              ></i>
            ) : (
              <i className="fa fa-lock icon"></i>
            )}
          </div>

          {/* <p className="forgot-password ">
            Forgot <a href="/forget-password">password?</a>
          </p> */}

          <p>.</p>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block button"
          >
            <i className="fas fa-sign-in-alt"></i> &nbsp;Sign in
          </button>

          {/* <a
            href="interface_dashboard.html"
            className="btn btn-google btn-user btn-block button_social_google"
          >
            <i className="fab fa-google fa-fw"></i> Login with Google
          </a>
          <a
            href="interface_dashboard.html"
            className="btn btn-facebook btn-user btn-block button_social_fb"
          >
            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
          </a> */}
          <a href="sign-up" className="create-account">
            Create An Account Here !
          </a>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
