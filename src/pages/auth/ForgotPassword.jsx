import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to process password reset."
        );
      }

      if (data.reset_token) {
        localStorage.setItem("reset_token", data.reset_token);
      }

      navigate("/reset-password");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">

        <div className="forgot-password-header">
          <h1>Forgot Password?</h1>
          <p>
            Enter your email address to continue with your password reset.
          </p>
        </div>

        <form
          className="forgot-password-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="forgotEmail">Email Address</label>

            <input
              type="email"
              id="forgotEmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="forgot-password-button"
            disabled={loading}
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </form>

        <div className="back-to-login">
          <Link to="/login">← Back to Sign In</Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;