import React, { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({ fname: "", email: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="fname"
          placeholder="Enter your Name"
          type="text"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          placeholder="Enter your Email"
          type="email"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" onChange={handleChange}></textarea>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
