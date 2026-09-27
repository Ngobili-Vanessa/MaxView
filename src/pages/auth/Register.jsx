import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-header">
          <h1>Join Fandom Universe</h1>
          <p>
            Create an account and make your fandom experience personal.
          </p>
        </div>

        <form className="register-form">

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="registerEmail">Email Address</label>
            <input
              type="email"
              id="registerEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>
            <input
              type="password"
              id="registerPassword"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="terms-group">
            <label>
              <input type="checkbox" required />
              <span>
                I agree to the Fandom Universe terms and privacy policy.
              </span>
            </label>
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

        </form>

        <div className="login-prompt">
          <p>
            Already have an account?{" "}
            <a href="/login">Sign in</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;