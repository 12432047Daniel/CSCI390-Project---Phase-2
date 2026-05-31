import React from "react";
import ContactForm from "../components/ContactForm";
import '../style/contact.css';
const Contact = () => {
  return (<div className="contact-container">
    <h1>Leave a Message</h1>
    <ContactForm></ContactForm>
    <h1>Contact Us</h1>
    <p>We would love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
      You can contact us through the following methods:</p>
    <ul>
      <li>Phone: +961 70 123 456</li>
      <li>Email: info@coffeecorner.com</li>
      <li>Address: Hamra Street, Beirut</li>
      <li>Opening Hours:</li>
      <li>Monday to Friday: 8:00 AM – 10:00 PM</li>
      <li>Saturday to Sunday: 9:00 AM – 11:00 PM</li>
    </ul>
  </div>
  )
}

export default Contact;