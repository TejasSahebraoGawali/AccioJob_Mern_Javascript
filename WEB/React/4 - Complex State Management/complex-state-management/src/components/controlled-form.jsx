import React, { useState } from "react";

const form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    login({ username, password });
  };

  const login = ({ username, password }) => {
    console.log("trying to login user...");
    setTimeout(() => {
      console.log("user logged in with username : ", username);
    }, 1000);
  };

  const handelUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handelPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>Controlled Form Example</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={handelUsernameChange} />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handelPasswordChange} />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
};

export default form;
