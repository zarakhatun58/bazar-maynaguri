import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

import { Alert, Row, Container, Col } from "react-bootstrap";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleRegister, handleGoogleSignIn, loginWithFacebook } = useAuth();

  const history = useHistory();

  const onSubmit = (data) => {
    // console.log(data);
    const user = { email: data.email, displayName: data.name };
    axios
      .post("https://afternoon-springs-05594.herokuapp.com/users", user)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          handleRegister(data.email, data.password, data.name);
          reset();
          history.push("/");
        }
      });
  };
  return (
    <Container
      className="bg-light pb-5 w-50 justify-content-md-center mt-2"
      style={{ border: "1px solid gray", boxShadow: " 0px 1px 10px #ccccccba" }}
    >
      <Row>
        <Col>
          <h4 className="text-center  py-5">Please Sign Up Here </h4>
          <div className=" mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="name"
                className="form-control  mb-3"
                {...register("name")}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="form-control  mb-3"
                {...register("email")}
                placeholder="Email"
                required
              />
              <input
                type="number"
                className="form-control  mb-3"
                {...register("number")}
                placeholder="Mobile No"
                required
              />
              <input
                type="password"
                className="form-control  mb-3"
                {...register("password")}
                placeholder="Your password"
                required
              />
              <input
                type="password"
                className="form-control  mb-3"
                {...register("password")}
                placeholder="Confirm Your password"
                required
              />
              <p>
                {" "}
                By clicking Sign In or continue with Facebook or Google, you
                agree to all Terms of Service and Privacy Policy
              </p>
              <button className="btn btn-danger w-100 fw-bold" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <p>---------------- Continue With---------------------------</p>
          <div className="mx-auto p-0 ">
            <div className=" d-flex justify-content-center mb-2 ">
              <div className="mx-2">
                {" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary  text-white"
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
                  to="/login"
                >
                  Already have an Account ? Login
                </Link>
              </div>
              <div>
                <Alert severity="success">User Create Successfully!</Alert>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
