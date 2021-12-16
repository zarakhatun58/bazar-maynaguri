import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import useAuth from "./../../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = ({ time, email }) => {
  const { user, logOut } = useAuth();
  const [updateInfo, setUpdateInfo] = useState({});

  const initialInfo = {
    displayName: user.displayName,
    email: user.email,
    phone: "",
    about: "",
    date: "",
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...updateInfo };
    console.log(newInfo);
    newInfo[field] = value;
    setUpdateInfo(newInfo);
  };

  //data send to server
  fetch("http://localhost:5000/profiles", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  const handleProfileSave = (e) => {
    alert("Successfully update");
    e.preventDefault();
    const profile = { ...updateInfo, time, email };
    console.log(profile);
  };

  return (
    <>
      <Container>
        <Row>
          <h4> Edit Profile</h4>
          <Col sm={3} sticky="left">
            <Row className="align-items-center justify-content-center p-2">
              {" "}
              <img
                style={{ width: "100px" }}
                src="https://i.ibb.co/pKxHFyT/uplodimg.jpg"
                alt=""
              />
              <h5 className="m-4">
                {" "}
                Robin Manna <br />
                410
              </h5>
            </Row>
            <Row>
              <Button
                type="submit"
                className="color-dark  hover:bg-indigo hover:color:light "
                variant="light"
              >
                Dashboard
              </Button>
              <Link to="/editProfile">
                {" "}
                <Button variant="light">Edit Profile</Button>{" "}
              </Link>
              <Button variant="light">My Order</Button>
              <Button variant="light">My Favorite</Button>
              <Button variant="light">Message</Button>
              <Button variant="light">Reviews</Button>
              <Button variant="light">Notification</Button>
              <Button onClick={() => logOut()} variant="danger">
                Logout
              </Button>
            </Row>
          </Col>

          <Col sm={9}>
            <form className=" flex flex-col align-items-center justify-center text-start  border shadow-md p-2">
              <Row>
                <div class="form-group col-md-4">
                  <label for="inputName">Name</label>
                  <input
                    type="Name"
                    onBlur={handleOnBlur}
                    name="displayName"
                    class="form-control"
                    id="inputName"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group col-md-4 col-lg-4 ">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    onBlur={handleOnBlur}
                    name="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder=" Enter Email"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="Number">Phone</label>
                  <input
                    type="number"
                    onBlur={handleOnBlur}
                    name="number"
                    class="form-control"
                    id="number"
                    placeholder="Enter here"
                  />
                </div>
              </Row>

              <Row sm={12}>
                <div className="form-group  w-full align-items-start">
                  <label for="inputAbout">About Me</label>

                  <textarea
                    rows="4"
                    cols="90"
                    type="text"
                    name="about"
                    onBlur={handleOnBlur}
                    className=" w-full form-control"
                    id="inputAddress"
                    placeholder="Enter your description here"
                  />
                </div>
              </Row>
              <Row class="form-group ">
                <div className=" col-md-6">
                  <label for="inputDate">Date of Birth</label> <br />
                  <input
                    type="date"
                    name="date"
                    onBlur={handleOnBlur}
                    id="start"
                    name="trip-start"
                    placeholder="Enter here"
                    min="2000-01-01"
                    max="2021-12-15"
                  ></input>
                </div>
                <div className="col-md-6">
                  <label for="inputCity">Gender</label> <br /> 
                  <input
                    name="male"
                    type="radio"
                    id="radio1"
                    onBlur={handleOnBlur}
                    name="radios"
                    value="all"
                    checked
                  />
                  <label for="radio1">Male</label>
                  <input
                    name="female"
                    type="radio"
                    id="radio2"
                    onBlur={handleOnBlur}
                    name="radios"
                    value="all"
                  />
                  <label for="radio2">Female</label>
                </div>
              </Row>
              <Row>
                <div class="col-sm-12">
                  <div class=" col-sm-12 ">
                    <div>
                      <label class="mt-2">Travel</label>
                      <Form.Group
                        className=" mt-2 mb-3 d-flex mr-2 p-2 "
                        id="formGridCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Bus"
                          className="pr-2"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Car"
                          className="pr-2"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Track"
                          className="pr-2"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Walk"
                          className="pr-2"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Scooter"
                          className="pr-2"
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="w-75">
                <div class="form-group">
                  <label for="inputAddress">Language</label>
                  <select
                    type="text"
                    name="language"
                    onBlur={handleOnBlur}
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter your description here"
                  >
                    <option selected>Choose...</option>
                    <option value="Eng">English</option>
                    <option value="Hin">Hindi</option>
                    <option value="Ben">Bengali</option>
                  </select>
                </div>
              </Row>
              <Row>
                <Form.Group className="position-relative mb-3 w-50 ">
                  <Form.Label>Profile Image </Form.Label>
                  <Form.Control
                    type="file"
                    onBlur={handleOnBlur}
                    name="image"
                    className="bg-black text-white"
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="w-75">
                <label for="input">Location</label>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputCity">Country</label>
                    <input
                      name="country"
                      onBlur={handleOnBlur}
                      type="text"
                      class="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select
                      onBlur={handleOnBlur}
                      name="state"
                      id="inputState"
                      class="form-control"
                    >
                      <option selected>Choose...</option>
                      <option>Maharashtra</option>
                      <option>West Bengal</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">City</label>
                    <select
                      onBlur={handleOnBlur}
                      name="city"
                      id="inputState"
                      class="form-control"
                    >
                      <option selected>Choose...</option>
                      <option>Bangalore</option>
                      <option>Kolkata</option>
                      <option>Mumbai</option>
                    </select>
                  </div>
                </div>
              </Row>

              <Row className="w-75">
                <label for="input">Change Password</label>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label>Current password</label>
                    <input
                      name="password"
                      onBlur={handleOnBlur}
                      type="password"
                      placeholder="Enter here"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label>New password</label>
                    <input type="password" placeholder="Enter here" />
                  </div>
                  <div class="form-group col-md-4">
                    <label>Confirm password</label>
                    <input type="password" placeholder="Enter here" />
                  </div>
                </div>
              </Row>

              <button
                onClick={handleProfileSave}
                type="submit"
                class="btn btn-danger"
              >
                Save All Change
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProfile;
