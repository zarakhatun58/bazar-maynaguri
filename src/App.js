import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Home/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Home/Login/Login";
import Home from "./pages/Home/Home/Home.js";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import AuthProvider from "./contexts/AuthProvider.js";

import EditProfile from "./pages/Profile/EditProfile";
import MyOrder from "./pages/MyOrder/MyOrder";
import MyFavorite from "./pages/MyFavorite/MyFavorite";
import Message from "./pages/Message/Message";
import Reviews from "./pages/Reviews/Reviews";
import Notification from "./pages/Notification/Notification.js";

import ForgetPassword from "./pages/Home/Login/ForgetPassword.js";

import DashboardHome from "./pages/Home/Dashboard/DashboardHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forgetPassword">
              <ForgetPassword></ForgetPassword>
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/editProfile">
              <EditProfile />
            </Route>
            <Route path="/myOrder">
              <MyOrder />
            </Route>
            <Route path="/myFavorite">
              <MyFavorite />
            </Route>

            <Route path="/message">
              <Message />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
