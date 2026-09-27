import "./EmailVerification.css";

function EmailVerification() {
  return (
    <div className="email-verification-page">
      <div className="email-verification-container">

        <div className="verification-icon">
          ✓
        </div>

        <div className="email-verification-header">
          <h1>Check Your Email</h1>

          <p>
            We've sent a verification link to your email address.
            Please check your inbox and click the link to verify
            your Fandom Universe account.
          </p>
        </div>

        <div className="verification-actions">
          <button
            type="button"
            className="resend-button"
          >
            Resend Verification Email
          </button>

          <a href="/login" className="verification-login-link">
            ← Back to Sign In
          </a>
        </div>

        <p className="verification-note">
          Didn't receive the email? Check your spam or junk folder.
        </p>

      </div>
    </div>
  );
}

export default EmailVerification;