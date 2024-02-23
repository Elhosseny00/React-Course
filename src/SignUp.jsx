import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [accpet, setAccept] = useState(false); // to show error message if inputs have an error after one click on submit button
  // const [flag, setFlag] = useState(true); don't use usestate in function if you will check many row of conditions because it will change every time because usestate reload page and function every row then we will use varaible inside function by let || const
  const [emailError, setEmailError] = useState("");
  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || rPassword !== password) {
      // setFlag(false);
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag === true) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_cofirmation: rPassword,
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {accpet && name === "" && (
            <p className="error">User Name Is Required</p>
          )}
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
          <label htmlFor="rPassword">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            value={rPassword}
            onChange={(e) => setRPassword(e.target.value)}
          />
          {accpet && rPassword !== password && (
            <p className="error">
              Password And Repeat Password Must Be The Same
            </p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
