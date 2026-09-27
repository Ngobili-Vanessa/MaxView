import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your Fandom Universe journey.</p>
        </div>

        <form className="login-form">

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>

              <a href="/forgot-password">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="register-prompt">
          <p>
            Don't have an account?{" "}
            <a href="/register">Create one</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;