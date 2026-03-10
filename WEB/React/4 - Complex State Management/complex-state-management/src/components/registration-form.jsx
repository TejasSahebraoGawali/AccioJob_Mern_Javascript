import React, { useState } from "react";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
  });

  const handelChange = (event) => {
    setForm((prevVal) => ({
      ...prevVal,
      [event.target.name]: event.target.value,
    }));
  };

  const handelAddressChange = (event) => {
    setForm((prevVal) => ({
      ...prevVal,
      address: { ...prevVal.address, [event.target.name]: event.target.value },
    }));
  };

  const register = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={register}>
      <header>
        <h1>Registration Form</h1>
      </header>
      <fieldset>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handelChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handelChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handelChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="street">Street </label>
        <input
          type="text"
          name="street"
          id="street"
          value={form.address.street}
          onChange={handelAddressChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="city">City </label>
        <input
          type="text"
          name="city"
          id="city"
          value={form.address.city}
          onChange={handelAddressChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="state">State </label>
        <input
          type="text"
          name="state"
          id="state"
          value={form.address.state}
          onChange={handelAddressChange}
        />
      </fieldset>

      <footer>
        <button type="submit">Register</button>
      </footer>
    </form>
  );
};

export default RegistrationForm;
