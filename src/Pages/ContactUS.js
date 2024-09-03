import React from "react";
import "./ContactUS.css";

const ContactUs = () => {
  const contactFormSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: event.target.contactName.value,
      phn: event.target.contactNo.value,
      email: event.target.contactMail.value,
    };
    console.log(userData);
    const submitData = async () => {
      const response = await fetch(
        "https://react-mart-3a28a-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    };
    submitData();
  };
  return (
    <form className="contact-form" onSubmit={contactFormSubmitHandler}>
      <h2>Reach Out</h2>
      <div>
        <label htmlFor="contactName">Name</label>
        <input type="text" id="contactName" required />
      </div>
      <div>
        <label htmlFor="contactNo">Phone Number</label>
        <input type="tel" id="contactNo" required />
      </div>
      <div>
        <label htmlFor="contactMail">Email</label>
        <input type="email" id="contactMail" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;
