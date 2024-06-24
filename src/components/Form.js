import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      phNumber: phNumber,
      message: message,
    };
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleFormData}>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Phone number</label>
        <br />
        <input
          type="tel"
          placeholder="enter phone"
          onChange={(e) => setPhNumber(e.target.value)}
        />
        <br />
        <label>Message</label>
        <br />
        <textarea
          placeholder="enter your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
