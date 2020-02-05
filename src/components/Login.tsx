import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import loginModule from "../modules/loginModule";
import { RootState } from "../modules/rootState";
interface LoginProps {}
const Login: React.FC<LoginProps> = _props => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.login.email);
  const [inputEmail, setInputEmail] = useState("");
  const submit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (inputEmail !== "") {
      dispatch(loginModule.actions.submit(inputEmail));
      setInputEmail("");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>{email}</p>
      <form>
        <input
          type="text"
          onChange={(e): void => {
            setInputEmail(e.target.value);
          }}
          value={inputEmail}
        />
        <button type="submit" onClick={submit}>
          送信
        </button>
      </form>
    </div>
  );
};

export default Login;
