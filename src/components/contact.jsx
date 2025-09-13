import React, { useState } from "react";
import "./contact.css";

const SEND_BUTTON_TEXT = "Send";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    csrfToken: Date.now().toString()
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzCgtcO-JwRGwMQoU4IP8bYb_kinZUwCZqFYWVMSqbXVNm7w5I8_j_DYO1Hv4oTAGg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '', csrfToken: Date.now().toString() });
    } catch {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Left Div */}
      <div className="contact-left">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          I'd love to hear from you! If you have any inquiries or just want to
          say hi, please use the contact form.
        </p>

        <p className="contact-email">📧 riyaabhati60@gmail.com</p>
        <p className="contact-linkdin">🔗<a href="https://www.linkedin.com/in/riya-bhati-4ba307289/">www.linkedin.com/in/riyabhati</a></p>

      </div>

      {/* Right Div */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input 
            type="email" 
            name="email"
            placeholder="Email *" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="send-btn">{SEND_BUTTON_TEXT}</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
