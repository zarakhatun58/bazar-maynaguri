import React from "react";
import "./EditProfile.css";
import { useState } from "react";
import useAuth from "./../../hooks/useAuth";
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
      <div class="">
        <section class="mainDasbordsec">
          <div class="container">
            <div class="mainDasbordInr">
              <div class="row">
                <div class="col-lg-3 col-md-12 col-sm-12 pl-0">
                  <div class="dasbordLeftsec">
                    <a
                      href="#url"
                      class="showmeu"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      <i class="fa fa-bars"></i>Show Menus
                    </a>
                    <div class="dasbordLeft">
                      <div class="profibx">
                        <em>
                          <img
                            src="https://i.ibb.co/w4qSB9j/dachprofi.jpg"
                            alt=""
                            onBlur={handleOnBlur}
                            name="image"
                          />
                        </em>
                        <strong>Rabin Mnna</strong>
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src="https://i.ibb.co/yRXFxC5/star1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="https://i.ibb.co/yRXFxC5/star1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="https://i.ibb.co/yRXFxC5/star1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="https://i.ibb.co/yRXFxC5/star1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="https://i.ibb.co/yRXFxC5/star1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <span>(410)</span>
                          </li>
                        </ul>
                      </div>
                      <div class="dasbordLeftlink">
                        <ul>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="https://i.ibb.co/qjrg7Zz/dashico1.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="#" class="activ">
                              <span>
                                <img
                                  src="https://i.ibb.co/qjrg7Zz/dashico1.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              Edit Profile
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="https://i.ibb.co/m08HQvw/dashico3.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              My Order
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="https://i.ibb.co/ThPsRWk/dashico10.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              My Favorite
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico4.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              Reviews
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico7.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              Messages<em>10</em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico8.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              Notifications
                              <em>14</em>
                            </a>
                          </li>
                          <li>
                            <Link to="/login">
                              <span>
                                <img
                                  src="images/dashico9.png"
                                  alt=""
                                  class="dashico1"
                                />
                              </span>
                              <button
                                className="btn-danger"
                                onClick={() => logOut()}
                              >
                                Log Out{" "}
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-9 col-md-12 col-sm-12 pr-0">
                  <div class="dasbordRightlink">
                    <h1>Edit Profile</h1>
                    <div class="dasbordRightBody">
                      <div class="editProformBx">
                        <form action="edit-profile-service-offered.html">
                          <div class="editProformir">
                            <div class="row">
                              <div class="col-md-4 col-sm-12">
                                <div class="iputBx">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    onBlur={handleOnBlur}
                                    name="name"
                                    placeholder="Enter here"
                                  />
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <div class="iputBx">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    onBlur={handleOnBlur}
                                    name="email"
                                    placeholder="Enter here"
                                  />
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <div class="iputBx">
                                  <label>Phone</label>
                                  <input
                                    type="text"
                                    onBlur={handleOnBlur}
                                    name="phone"
                                    placeholder="Enter here"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-12">
                                <div class="iputBx">
                                  <label>About me</label>
                                  <textarea
                                    onBlur={handleOnBlur}
                                    name="about"
                                    placeholder="Enter your description here..."
                                  ></textarea>
                                </div>
                              </div>

                              <div class="col-md-5 col-sm-6">
                                <div
                                  id="ui-datepicker-div"
                                  class="iputBx  ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
                                >
                                  <label>Date of Birth</label>
                                  <input
                                    type="date"
                                    class="datepicker"
                                    placeholder="Enter here"
                                    onBlur={handleOnBlur}
                                    required
                                    id="start"
                                    name="trip-start"
                                    min="1970-01-01"
                                    max="2021-12-18"
                                  />
                                </div>
                              </div>

                              <div class="col-md-4 col-sm-6">
                                <div class="genfil">
                                  <span>Gender</span>
                                  <ul>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio1"
                                        name="radios"
                                        value="all"
                                        checked
                                        onBlur={handleOnBlur}
                                        required
                                      />
                                      <label for="radio1">Male</label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio2"
                                        name="radios"
                                        value="all"
                                      />
                                      <label for="radio2">Female</label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-sm-12">
                                <div class="form_group edt_checkk">
                                  <label className="text-left search_label">
                                    Travel
                                  </label>
                                  <ul class="c_ul">
                                    <li>
                                      <label class="contect_container_checkBox">
                                        Bus
                                        <input
                                          type="checkbox"
                                          checked=""
                                          name="bus"
                                          onBlur={handleOnBlur}
                                          required
                                        />
                                        <span class="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label class="contect_container_checkBox">
                                        Car
                                        <input
                                          type="checkbox"
                                          name="car"
                                          onBlur={handleOnBlur}
                                          required
                                        />
                                        <span class="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label class="contect_container_checkBox">
                                        Track
                                        <input type="checkbox" name="text" />
                                        <span class="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label class="contect_container_checkBox">
                                        Walk
                                        <input
                                          type="checkbox"
                                          onBlur={handleOnBlur}
                                          name="email"
                                          required
                                        />
                                        <span class="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label class="contect_container_checkBox">
                                        Scooter
                                        <input
                                          type="checkbox"
                                          onBlur={handleOnBlur}
                                          required
                                          name="scooter"
                                        />
                                        <span class="contect_checkmark"></span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-sm-12">
                                <div class="form_fild_area_m frm_grp arro">
                                  <label className="text-left">Language </label>
                                  <select
                                    data-placeholder="Select"
                                    class="chosen-select"
                                    multiple
                                    tabindex="4"
                                    onBlur={handleOnBlur}
                                    name="language"
                                    required
                                  >
                                    <option value=""></option>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                    <option value="">Bengali</option>
                                    <option value="">Arabic</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-sm-12">
                                <div class="uplodimg">
                                  <span>Profile Image</span>
                                  <div class="uplodimgfil">
                                    <input
                                      type="file"
                                      name="file-1[]"
                                      id="file-1"
                                      class="inputfile inputfile-1"
                                      data-multiple-caption="{count} files selected"
                                      multiple
                                      onBlur={handleOnBlur}
                                      required
                                    />
                                    <label for="file-1">
                                      Click here to Upload Profile Image
                                      <img src="images/clickhe.png" alt="" />
                                    </label>
                                  </div>
                                  <div class="uplodimgfilimg">
                                    <em>
                                      <img src="images/uplodimg.jpg" alt="" />
                                    </em>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="locatioSec">
                              <h3>Location</h3>
                              <div class="row">
                                <div class="col-md-4 col-sm-6">
                                  <div class="iputBx">
                                    <label>Country</label>
                                    <select>
                                      <option>Select</option>
                                      <option>Select1</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                  <div class="iputBx">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      placeholder="Enter here"
                                      onBlur={handleOnBlur}
                                      name="state"
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                  <div class="iputBx">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full address"
                                      onBlur={handleOnBlur}
                                      name="city"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="locatioSec">
                              <h3>Change password</h3>
                              <div class="row">
                                <div class="col-md-4 col-sm-6">
                                  <div class="iputBx">
                                    <label>Current password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      onBlur={handleOnBlur}
                                      name="password"
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                  <div class="iputBx">
                                    <label>New password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      onBlur={handleOnBlur}
                                      name="new password"
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                  <div class="iputBx">
                                    <label>Confirm password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      onBlur={handleOnBlur}
                                      name="password"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="footdashSec">
                              <input
                                type="submit"
                                value="Save all changes"
                                class="subbtn"
                                onClick={handleProfileSave}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProfile;

/*




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












*/
