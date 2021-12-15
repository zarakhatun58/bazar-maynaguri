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
import PrivateRoute from "./pages/Home/Login/PrivateRoute";
import Dashboard from "./pages/Home/Dashboard/Dashboard";
import EditProfile from "./pages/Profile/EditProfile";
import MyOrder from "./pages/MyOrder/MyOrder";
import MyFavorite from "./pages/MyFavorite/MyFavorite";
import Message from "./pages/Message/Message";
import Reviews from "./pages/Reviews/Reviews";
import Notification from "./pages/Notification/Notification.js";
import DashboardHome from "./pages/Home/Dashboard/DashboardHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="about">
              <About />
            </Route>

            <Route exact path="/editProfile">
              <EditProfile />
            </Route>
            <Route exact path="/myOrder">
              <MyOrder />
            </Route>
            <Route exact path="/myFavorite">
              <MyFavorite />
            </Route>

            <Route exact path="/message">
              <Message />
            </Route>
            <Route exact path="/notification">
              <Notification />
            </Route>
            <Route exact path="/reviews">
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
