import React from "react";
import { auth, googleProvider } from "../../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const navigate = useNavigate();

  const handlesignin = async () => {
    const result = await signInWithPopup(auth, googleProvider).then((data) => {
      navigate('/dashboard', {
        state: {
          name: data.user.displayName,
          photo: data.user.photoURL,
        },
      });
    });
  };

  const handleLogin = () => {
   
    console.log("Login button clicked");
  };

  return (
    <div className="signin-container">
      <form className="signin-form">
        <h1 className="signin-title">Welcome Back</h1>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <div className="button-group">
          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" className="google-signin-button" onClick={handlesignin}>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
