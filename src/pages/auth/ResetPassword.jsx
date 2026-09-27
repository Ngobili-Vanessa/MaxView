import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="reset-password-page">
      <div className="reset-password-container">

        <div className="reset-password-header">
          <h1>Reset Password</h1>
          <p>
            Create a new password for your Fandom Universe account.
          </p>
        </div>

        <form className="reset-password-form">

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>

            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmNewPassword">
              Confirm New Password
            </label>

            <input
              type="password"
              id="confirmNewPassword"
              placeholder="Confirm your new password"
              required
            />
          </div>

          <button type="submit" className="reset-password-button">
            Reset Password
          </button>

        </form>

        <div className="back-to-login">
          <a href="/login">← Back to Sign In</a>
        </div>

      </div>
    </div>
  );
}

export default ResetPassword;