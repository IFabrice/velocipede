import "../../styles/styles.css";

function Login() {
  return (
    <div className="loginPage">
      <img src="./velocipede.png" alt="Velocipede logo" className="logo" />
      <h2>Log in to your account</h2>

      <form className="loginForm">
        <label htmlFor="loginEmail" className="labels">
          Email
        </label>
        <input
          type="email"
          id="loginEmail"
          placeholder="Enter your email"
          autoComplete="on"
        ></input>
        <label htmlFor="loginPassword" className="labels">
          Password
        </label>
        <input type="password" id="loginPassword"></input>
        <a href="abc.com" className="labels forgot">Forgot password</a>
        <input type="submit" value="Sign in"></input>
        <p className="forgot">
          Don't have an account? <span><a href="abc.com">Sign up</a></span>
        </p>
      </form>
    </div>
  );
}

export default Login;
