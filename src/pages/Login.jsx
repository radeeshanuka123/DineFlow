import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { auth, googleProvider, db } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectUserByRole = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      await setDoc(userRef, {
        name: user.displayName || "Customer",
        email: user.email,
        role: "customer",
        createdAt: new Date(),
      });

      navigate("/profile");
      return;
    }

    const role = userDoc.data().role;

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await redirectUserByRole(result.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await redirectUserByRole(result.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome back</h1>
        <p className="login-subtitle">Login to continue to DineFlow</p>

        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-main-btn">
            Login
          </button>
        </form>

        <div className="login-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <button
          type="button"
          className="google-login-btn"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="login-bottom-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;