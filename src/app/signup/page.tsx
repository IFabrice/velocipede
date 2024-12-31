import "../../styles/globals.css";

export default function Signup() {
  return (
    <div className="bg-white-500 flex h-screen flex-col items-center justify-center">
      <img
        src="./velocipede.png"
        alt="Velocipede logo"
        className="h-auto w-[170px] relative bottom-[20px]"
      />
      <h1 className="relative bottom-[15px] text-[28px] font-[600] text-[#454545]">Create a new account</h1>

      <form id="signupForm" className="flex flex-col justify-center gap-2">
        <label htmlFor="signupEmail" className="inputLabel">
          Mobile number/Email
        </label>
        <input
          type="email"
          id="signupEmail"
          placeholder="Email or phone number"
          autoComplete="on"
          className="inputBox"
        ></input>
        <label htmlFor="signupPassword" className="inputLabel">
            Password
          </label>
        <input
          type="password"
          id="signupPassword"
          placeholder="Create password"
          className="inputBox"
        ></input>
        <label htmlFor="confimsignupPassword" className="inputLabel">Confirm Password</label>
        <input
          type="password"
          id="confirmsignupPassword"
          placeholder="Confirm password"
          className="inputBox"
        ></input>
        <input type="submit" value="Sign up" className="inputBox bg-[#4940C1] text-white !p-1 self-center !w-4/5 my-4"></input>
        <p className="text-[#848181]">
          Already have an account?
          <span className="text-[#4940C1]">
            <a href="abc.com"> Log in</a>
          </span>
        </p>
      </form>
    </div>
  );
}
