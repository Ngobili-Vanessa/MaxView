import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">

        <div className="forgot-password-header">
          <h1>Forgot Password?</h1>
          <p>
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form className="forgot-password-form">

          <div className="form-group">
            <label htmlFor="forgotEmail">Email Address</label>

            <input
              type="email"
              id="forgotEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="forgot-password-button">
            Send Reset Link
          </button>

        </form>

        <div className="back-to-login">
          <a href="/login">← Back to Sign In</a>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;