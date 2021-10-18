import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/mes-notes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };
  return (
    <div className="outer">
      <div className="inner">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <form>
          <h3>Sign Up</h3>

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
              placeholder="Enter Your Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="fa fa-user icon"></span>
          </div>

          <div className="wrapper">
            <input
              spellCheck="false"
              placeholder="Enter Your Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="fa fa-envelope icon"></span>
          </div>

          <div className="wrapper">
            <input
              spellCheck="false"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="fa fa-lock icon"></span>
          </div>

          <div className="wrapper">
            <input
              spellCheck="false"
              type="password"
              placeholder="Enter Your Password Again"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <span className="fa fa-lock icon"></span>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block button"
            style={{ marginTop: "8%" }}
            onClick={submitHandler}
          >
            <i className="fas fa-sign-in-alt"></i> &nbsp;Sign Up
          </button>

          <a
            style={{ marginLeft: "4%", textDecoration: "none" }}
            href="sign-in"
            className="create-account"
          >
            Already Have An Account ? Login Here !
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
