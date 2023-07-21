import React, { useState } from 'react';
import '../Contact/Contact.css';
import Sidebar from '../Sidebar/Sidebar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can make an API call or perform any necessary action
    // For this example, we will just display a success message

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitted(true);
  };

  return (
    <section className='home'>
    <div id="contact" className="contact-area section-padding">
      <Sidebar />
      <div className="container" id='contactus'>
        <div className="section-title text-center">
          <h1>Get in Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
            Aenean vitae metus in augue pretium ultrices.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="contact">
              {isSubmitted ? (
                <div className="success-message">
                  <h2>Thank you for contacting us!</h2>
                  <p>We will get back to you soon.</p>
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-contact-bg" title="Submit Your Message!">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="single_address">
              <i className="fa fa-map-marker"></i>
              <h4>Our Address</h4>
              <p>3481 Melrose Place, Beverly Hills</p>
            </div>
            <div className="single_address">
              <i className="fa fa-envelope"></i>
              <h4>Send your message</h4>
              <p>Info@example.com</p>
            </div>
            <div className="single_address">
              <i className="fa fa-phone"></i>
              <h4>Call us on</h4>
              <p>(+1) 517 397 7100</p>
            </div>
            <div className="single_address">
              <i className="fa fa-clock-o"></i>
              <h4>Work Time</h4>
              <p>
                Mon - Fri: 08.00 - 16.00.
                <br />
                Sat: 10.00 - 14.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
