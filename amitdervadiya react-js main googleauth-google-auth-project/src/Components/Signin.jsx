import React from "react";
import { auth, googleProvider } from "../../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const navigate = useNavigate();

  const handlesignin = async () => {
      const result = await signInWithPopup(auth, googleProvider).then(data=>{
      
        navigate('/dashboard', {
          state: {
            name: data.user.displayName || "User",
            photo: data.user.photoURL || "https://via.placeholder.com/150",
          },
      })
     
      });
   
  };

  return (
    <div className="signin-container">
      <form className="signin-form">
        <h1 className="signin-title">Welcome Back</h1>

        {/* Email Input */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        {/* Sign In with Google */}
        <button type="button" className="google-signin-button" onClick={handlesignin}>
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
