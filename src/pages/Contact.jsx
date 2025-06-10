import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Contact() {
  const handleFocus = (e) => {
    e.target.placeholder = '';
  };

  const handleBlur = (e, defaultPlaceholder) => {
    e.target.placeholder = defaultPlaceholder;
  };

  return (
    <>
      <Header />
      <Hero hero={{ title: "Contact" }} />

      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div className="container-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1749545348960!6m8!1m7!1sTfWboPJd0H03C1WxH6p3VA!2m2!1d5.498344098059721!2d7.485455471374603!3f83.31035275852089!4f-6.880592804592197!5f1.086894583717437" 
                width="700" 
                height="450" 
                style={{ border: "0" }}
                title="Google Maps Location"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea 
                          className="form-control w-100" 
                          name="message" 
                          id="message" 
                          cols="30" 
                          rows="9" 
                          onFocus={handleFocus}
                          onBlur={(e) => handleBlur(e, 'Enter Message')}
                          placeholder="Enter Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                          className="form-control valid" 
                          name="name" 
                          id="name" 
                          type="text" 
                          onFocus={handleFocus}
                          onBlur={(e) => handleBlur(e, 'Enter your name')}
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                          className="form-control valid" 
                          name="email" 
                          id="email" 
                          type="email" 
                          onFocus={handleFocus}
                          onBlur={(e) => handleBlur(e, 'Enter email address')}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input 
                          className="form-control" 
                          name="subject" 
                          id="subject" 
                          type="text" 
                          onFocus={handleFocus}
                          onBlur={(e) => handleBlur(e, 'Enter Subject')}
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home"></i></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <Footer/>
    </>
  );
}

export default Contact;