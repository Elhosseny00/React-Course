import axios from "axios";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accpet, setAccept] = useState(false); // to show error message if inputs have an error after one click on submit button
  // const [flag, setFlag] = useState(true); don't use usestate in function if you will check many row of conditions because it will change every time because usestate reload page and function every row then we will use varaible inside function by let || const
  const [emailError, setEmailError] = useState("");
  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if ( password.length < 8) {
      // setFlag(false);
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag === true) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {

          email: email,
          password: password,
        });
      }
    } catch (error) {
      setEmailError(error.response.status);
    }
  }
  return (
    <div className="sign-up">
      <div className="register">
        <form onSubmit={submit}>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {accpet && emailError === 422 && (
            <p className="error">Email Is Already Been Taken</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {accpet && password.length < 8 && (
            <p className="error">Passowrd Must Be More Than 8 Char</p>
          )}

          <div style={{ textAlign: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
