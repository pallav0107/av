import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: "", email: "", message: "", service: "" });
  
    fetch("https://formsubmit.co/ajax/pallav01@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setShowToast(true);
          setFormData({ name: "", email: "", message: "", service: "" });
        } else {
          alert("Failed to send your request. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
      });
  };
  return (
    <div className="card mt-5 p-4 shadow-lg bg-light">
      <h2 className="text-center text-primary mb-4">Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 align-items-center">
          <label htmlFor="name" className="col-sm-3 col-form-label text-end">
            Full Name:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label htmlFor="email" className="col-sm-3 col-form-label text-end">
            Email Address:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label htmlFor="message" className="col-sm-3 col-form-label text-end">
            Message:
          </label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Describe your requirements"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label htmlFor="service" className="col-sm-3 col-form-label text-end">
            Select a Service:
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Choose a service</option>
              <option value="residential">Residential Solutions</option>
              <option value="office">Office Solutions</option>
              <option value="factory">Factory Solutions</option>
              <option value="school">School Solutions</option>
              <option value="hospital">Hospital Solutions</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit Request
        </button>
      </form>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="position-fixed top-0 start-50 translate-middle-x mt-3 bg-success text-white"
      >
        <Toast.Body>Request submitted successfully!</Toast.Body>
      </Toast>
    </div>
  );
}

export default QuoteForm;
