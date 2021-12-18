import { Alert, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const {
    signInWithGoogle,
    user,
    setUser,
    saveUser,
    logOut,
    setIsLoading,
    handleEmailLogin,
    loginWithFacebook,
  } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const [loginData, setLoginData] = useState({});

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        saveUser(user.email, user.displayName, "PUT");
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogOut = () => {
    setIsLoading(true);
    logOut()
      .then((res) => {
        setUser({});
        history.push("/home");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (data) => {
    handleEmailLogin(data.email, data.password);
    reset();
  };

  return (
    <Container className="bg-light py-5 w-50 ">
      <Row className="justify-content-left">
        <Col>
          <div className=" pb-5">
            <h3 className="text-center  pb-3">Sign In</h3>
            <div className=" mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  onChange={handleOnChange}
                  className="form-control  mb-3"
                  {...register("email")}
                  placeholder="Your Email"
                  required
                />
                <input
                  type="password"
                  onChange={handleOnChange}
                  className="form-control  mb-3"
                  {...register("password")}
                  placeholder="Your password"
                  required
                />
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Check me out" />
                  <Link to="/forgetPassword"> Forgot Password</Link>
                </Form.Group>
                <Link to="/">
                  <button
                    className="btn btn-danger w-100 fw-bold"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
          <p>---------------- Continue With---------------------------</p>
          <div className="mx-auto p-0 ">
            <div className=" d-flex justify-content-center mb-2 ">
              <div className="mx-2">
                {" "}
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-primary text-white"
                >
                  Google
                </button>
              </div>
              <div className="">
                <button
                  onClick={loginWithFacebook}
                  className="btn btn-primary text-white"
                >
                  Facebook
                </button>
              </div>
            </div>
            <div>
              <div>
                <Link
                  className="text-success"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    marginTop: "10px",
                  }}
                  to="/signup"
                >
                  Dont have an Account ? Create Account
                </Link>
              </div>
              <div>
                {user?.email && (
                  <Alert severity="success">Login successfully!</Alert>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
