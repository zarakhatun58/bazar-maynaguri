import React from "react";

const Login = () => {
  return (
    <div class="wrapper">
      <div class="search_main_section">
        <div class="container">
          <div class="row res_padd">
            <div class="main-center-div">
              <div class="top-border-div">
                <div class="login-from-area">
                  <h2>Create Account</h2>
                  <div>
                    <input
                      type="text"
                      class="login-type"
                      placeholder="Full name"
                      name=""
                    />
                    <div class="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="text"
                      class="login-type"
                      placeholder="Email"
                      name=""
                    />
                    <div class="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="text"
                      class="login-type"
                      placeholder="Mobile number"
                      name=""
                    />
                    <div class="clearfix"></div>
                  </div>

                  <div class="password-in">
                    <input
                      id="password-field"
                      type="password"
                      class="login-type"
                      name="password"
                      placeholder="password"
                    />
                    <div class="clearfix"></div>
                    <span
                      toggle="#password-field"
                      class="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <div class="password-in">
                    <input
                      id="password-field"
                      type="password"
                      class="login-type"
                      name="password"
                      placeholder="Confirm password"
                    />
                    <div class="clearfix"></div>
                    <span
                      toggle="#password-field"
                      class="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <p>
                    By clicking Sign In or continue with Facebook or Google, you
                    agree to all <a href=""> Terms of Service</a> and{" "}
                    <a href="#"> Privacy Policy</a>
                  </p>
                  <button type="submit" class="login-submit">
                    Sign up
                  </button>
                </div>
                <div class="or-area">
                  <span>Or Continue with</span>
                </div>
                <div class="login-socials-area">
                  <div class="socials-btns">
                    <a href="#" class="common-btns facebook-btn">
                      <img src="./images/login-facebook.png" alt="" /> Facebook
                    </a>
                    <a href="#" class="common-btns google-btn">
                      <img src="./images/login-google.png" alt="" /> Google
                    </a>
                  </div>
                </div>
              </div>
              <div class="bottom-account-div">
                <p>
                  Already have an account? <a href="login.html">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
