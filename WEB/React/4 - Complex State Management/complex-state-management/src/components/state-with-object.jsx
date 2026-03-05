import React, { useState } from "react";

const form = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let { username, password } = form;

    login({ username, password });
  };

  // immutable - value cannot be changed
  // mutable - value can be changed
  //   form.username = event.target.value;   <== mutation ❌
  //   setForm(form) ❌

  // ##  Note: we use immutable objects because object are compared using references
  // ##  so we need to distinguish between existing state and updated state

  const handelUsernameChange = (event) => {
    // setForm({ ...form, username: event.target.value });
    setForm((prev) => ({ ...prev, username: event.target.value }));
  };

  const handelPasswordChange = (event) => {
    // setForm({ ...form, password: event.target.value });
    setForm((prevForm) => ({ ...prevForm, password: event.target.value }));
  };

  const login = ({ username, password }) => {
    console.log("trying to login user...");
    setTimeout(() => {
      console.log("user logged in with username : ", username);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>State Object(Form)</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>

        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handelUsernameChange}
        />
      </section>
      <section>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handelPasswordChange}
        />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
};

export default form;
