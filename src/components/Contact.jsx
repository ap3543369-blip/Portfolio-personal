import { useState } from "react";
import Reveal from "./Reveal";
import { LINKS, SOCIALS } from "../data/siteData";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    /*
      Abhi sirf frontend success message hai (original jaisa).
      Asli email bhejne ke liye yahan Formspree / Web3Forms / EmailJS
      ya apna Django/FastAPI backend connect karo.
    */
    setStatus({
      type: "success",
      text: "Thank you! Your message has been prepared. I'll get back to you soon.",
    });
    setForm(EMPTY_FORM);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <Reveal className="section-heading text-center">
          <span className="section-subtitle">CONTACT ME</span>

          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>

          <p className="section-description">
            Have a project in mind, internship opportunity or want to
            collaborate? Feel free to reach out.
          </p>
        </Reveal>

        <div className="row g-5 align-items-start mt-4">
          {/* Contact Information */}
          <div className="col-lg-5">
            <Reveal className="contact-info">
              <h3>Let's work together</h3>

              <p>
                I'm always interested in learning, building projects and
                exploring new opportunities in software development.
              </p>

              <a href={`mailto:${LINKS.email}`} className="contact-box">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <span>Email</span>
                  <strong>{LINKS.email}</strong>
                </div>
              </a>

              <a href={`tel:${LINKS.phone}`} className="contact-box">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span>Phone</span>
                  <strong>{LINKS.phoneDisplay}</strong>
                </div>
              </a>

              <div className="contact-box">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <span>Location</span>
                  <strong>Greater Noida, Uttar Pradesh</strong>
                </div>
              </div>

              <div className="contact-social">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <Reveal className="contact-form-wrapper">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn-send">
                      Send Message
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="formMessage"
                  className={`form-message ${status.type}`.trim()}
                  role="alert">
                  {status.text}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
