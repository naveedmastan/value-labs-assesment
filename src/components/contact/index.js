import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveContactForm } from "../../redux/actions";
import SubmittedForms from "./SubmittedForms";

const ContactForm = () => {
  const [defaultValues, setDefaultValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);
  const savedForms = useSelector((state) => state?.contact?.savedForms);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    dispatch(saveContactForm(defaultValues));
    setDefaultValues({});
    event.preventDefault();
    event.stopPropagation();
    formRef.current.reset();
    alert("Data saved successfully");
  };
  const onChange = (event) => {
    const {
      target: { id, value },
    } = event;
    setDefaultValues({ ...defaultValues, [id]: value });
  };
  return (
    <section id="mu-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-contact-area">
              <div className="mu-title">
                <span className="mu-subtitle">Get In Touch</span>
                <h2>Contact Us</h2>
                <i className="fa fa-spoon"></i>
                <span className="mu-title-bar"></span>
              </div>
              <div className="mu-contact-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-contact-left">
                      <form
                        className="mu-contact-form"
                        ref={formRef}
                        onSubmit={onSubmit}
                      >
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            onChange={onChange}
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            required
                            type="email"
                            onChange={onChange}
                            className="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input
                            required
                            type="text"
                            onChange={onChange}
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea
                            required
                            className="form-control"
                            id="message"
                            onChange={onChange}
                            cols="30"
                            rows="10"
                            placeholder="Type Your Message"
                          ></textarea>
                        </div>
                        <button type="submit" className="mu-send-btn">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mu-contact-right">
                      <div className="mu-contact-widget">
                        <h3>Office Address</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia temporibus corporis ea non consequatur
                          porro corrupti hic voluptatibus assumenda, doloribus.
                        </p>
                        <address>
                          <p>
                            <i className="fa fa-phone"></i> (850) 457 6688
                          </p>
                          <p>
                            <i className="fa fa-envelope-o"></i>
                            contact@markups.io
                          </p>
                          <p>
                            <i className="fa fa-map-marker"></i>368 St. Panama
                            City, Florida, USA
                          </p>
                        </address>
                      </div>
                      <div className="mu-contact-widget">
                        <h3>Open Hours</h3>
                        <address>
                          <p>
                            <span>Monday - Friday</span> 9.00 am to 12 pm
                          </p>
                          <p>
                            <span>Saturday</span> 9.00 am to 10 pm
                          </p>
                          <p>
                            <span>Sunday</span> 10.00 am to 12 pm
                          </p>
                        </address>
                      </div>
                      {savedForms?.length > 0 && (
                        <SubmittedForms data={savedForms} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
