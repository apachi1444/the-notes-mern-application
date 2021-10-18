import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WelcomePage from "./Components/WelcomePage";
import ForgetPassword from "./Components/ForgetPassword";
import { useState } from "react";
import MyNotes from "./Components/MyNotes";
import Profile from "./Components/Profile";
import SingleNote from "./Components/SingleNote";
import CreateNote from "./Components/CreateNote";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App">
        <Header setSearch={(s) => setSearch(s)}></Header>

        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/Sign-in" component={Signin} />
          <Route exact path="/Sign-up" component={Signup} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route
            path="/mes-notes"
            component={({ history }) => (
              <MyNotes search={search} history={history} />
            )}
          />
          <Route path="/note/:id" component={SingleNote} />
          <Route path="/createnote" component={CreateNote} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
