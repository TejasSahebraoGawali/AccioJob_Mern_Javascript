import React, { useState } from "react";

const form = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let { username, password } = form;

    login({ username, password });
  };

  const login = ({ username, password }) => {
    console.log("trying to login user...");
    setTimeout(() => {
      console.log("user logged in with username : ", username);
    }, 1000);
  };

  const handelChange = (event) => {
    console.log({ target: event.target });
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>State Object - Single Change Handler (Form) </h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handelChange}
        />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handelChange}
        />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
};

export default form;
