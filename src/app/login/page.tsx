import "../../styles/globals.css";

function Login() {
  return (
    <div className="bg-white-500 flex h-screen flex-col items-center justify-center">
      <img src="./velocipede.png" alt="Velocipede logo"         className="h-auto w-[170px] relative bottom-[20px]"/>
      <h1 className="relative bottom-[15px] text-[28px] font-[600] text-[#454545]">Log in to your account</h1>

      <form id="loginForm" className="flex flex-col justify-center gap-2">
        <label htmlFor="loginEmail" className="inputLabel">
          Email
        </label>
        <input
          type="email"
          id="loginEmail"
          placeholder="Enter your email"
          autoComplete="on"
          className="inputBox"
        ></input>
        <label htmlFor="loginPassword" className="inputLabel">
          Password
        </label>
        <input type="password" id="loginPassword" className="inputBox" placeholder="Password"></input>
        <a href="abc.com" className="inputLabel forgot">Forgot password</a>
        <input type="submit" value="Sign in" className="inputBox bg-[#4940C1] text-white !p-1 self-center !w-4/5 my-4"></input>
        <p className="text-[#848181]">
          Don't have an account? <span><a href="abc.com" className="text-[#4940C1]">Sign up</a></span>
        </p>
      </form>
    </div>
  );
}

export default Login;
