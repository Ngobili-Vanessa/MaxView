import { Link } from "react-router-dom";
import "./EmailVerification.css";

function EmailVerification() {
  return (
    <div className="email-verification-page">
      <div className="email-verification-container">
        <div className="email-verification-header">
          <h1>Verify Your Email</h1>
          <p>
            We've sent a verification link to your email address.
            Please check your inbox to continue.
          </p>
        </div>

        <div className="verification-message">
          <p>Didn't receive the email?</p>
          <button type="button">Resend Verification Email</button>
        </div>

        <div className="back-to-login">
          <Link to="/login">← Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;