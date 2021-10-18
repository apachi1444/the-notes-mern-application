import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WelcomePage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {}, [userInfo]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Your Application</h1>
              <p className="subtitle">Here U can Write Your Notes</p>
            </div>
            {!userInfo ? (
              <div className="buttonContainer">
                <Link to="/Sign-in">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="landingbutton"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <h1>Mr/Mrs {userInfo.name}</h1>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomePage;
