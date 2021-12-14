import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Home/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Home/Login/Login";
import Home from "./pages/Home/Home/Home.js";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import AuthProvider from "./contexts/AuthProvider.js";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

/*
<AuthProvider>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
*/

/* </Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />

            <Route path="/login" element={<Login />}>
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Route>
        </Routes> */
