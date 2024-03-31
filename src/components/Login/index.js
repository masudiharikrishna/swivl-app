import react from "react";
import "./index.css"

class Login extends react.Component{
    render(){
        return(
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
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1701884547/download_tgrebg.png" className="logo" alt="google"/>
                                <p>Sign in with Google</p>
                            </div>
                            <div className="sign-in-google">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1701884558/Apple-Logo_luonxp.png" className="logo-apple" alt="apple"/>
                                <p>Sign in with Apple</p>
                            </div>
                        </div>
                    </div>
                    <div className="login-part">
                        <label>Email address</label>
                        <input type="mail" className="mail-input"/>
                        <label>Password</label>
                        <input type="password" className="password-input"/>
                        <p>Forgot Password ?</p>
                        <button>Sign In</button>
                    </div>
                    <p>Don't have an account? <span className="register">Register here</span></p>
                </div>
            </div>
        )
    }
}
export default Login