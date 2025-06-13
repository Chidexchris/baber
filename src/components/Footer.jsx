import React from 'react';

function Footer() {
  return (
    <footer style={{backgroundColor: 'black'}}>
      <div className="footer-area section-bg" data-background="assets/img/gallery/footer_bg.png">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-logo">
                    <a href="/"><img src="assets/img/logo/logo2_footer.png" alt="Company logo" /></a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <p className="info1">Receive updates and latest news direct from Simply enter.</p>
                    </div>
                  </div>
                  <div className="footer-number">
                    <h4><span>+564 </span>7885 3222</h4>
                    <p>youremail@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Empty columns removed for brevity */}
              
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Location</h4>
                    <div className="footer-pera">
                      <p className="info1">Subscribe now to get daily updates</p>
                    </div>
                  </div>
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" 
                        method="get" 
                        className="subscribe_form relative mail_part" 
                        noValidate
                      >
                        <input 
                          type="email" 
                          name="EMAIL" 
                          id="newsletter-form-email" 
                          placeholder="Email Address" 
                          className="placeholder hide-on-focus" 
                        />
                        <div className="form-icon">
                          <button type="submit" className="email_icon newsletter-submit button-contactForm">
                            Send
                          </button>
                        </div>
                        <div className="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="footer-copy-right">
                  <p>
                  
                    Copyright &copy;{new Date().getFullYear()} All rights reserved | 
                    This was created <i className="fa fa-heart" aria-hidden="true"></i> by {' '}
                    <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Deratech</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="footer-social f-right">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/sai4ull" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" rel="noopener noreferrer">
                    <i className="fas fa-globe"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;