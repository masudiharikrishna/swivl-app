import React from "react";
import "./index.css";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
    responseGoogle = (response) => {
        console.log(response);
      };
  render() {
    return (
      <div className="Login-page">
        <div className="board-section">
          <h1>Board.</h1>
        </div>
        <div className="sign-in-section">
          <div className="sign-in-item">
            <h1>Sign In</h1>
            <h4>Sign in to your account</h4>
            <div className="sign-part">
              <div className="sign-in-google">
              <GoogleLogin
                clientId="363065887324-jajlb12dl55ud30o1mu2156fbu6mugon.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              </div>
              <div className="sign-in-google">
                <img
                  src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1701884558/Apple-Logo_luonxp.png"
                  className="logo-apple"
                  alt="apple"
                />
                <p>Sign in with Apple</p>
              </div>
            </div>
          </div>
          <div className="login-part">
            <label>Email address</label>
            <input type="mail" className="mail-input" />
            <label>Password</label>
            <input type="password" className="password-input" />
            <p>Forgot Password ?</p>
            <button>Sign In</button>
          </div>
          <p>
            Don't have an account? <span className="register">Register here</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Login;
