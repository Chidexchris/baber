import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Index() {
  return (
    <>
    <Header />

    <main>
        <div className="slider-area position-relative fix">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay="0.2s">with patrick potter</span>
                                    <h1 data-animation="fadeInUp" data-delay="0.5s">Our Hair Style make your look elegance</h1>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
                
            </div>
            
        </div>
        
        <section className="about-area section-padding30 position-relative" id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-11">
                        <div className="about-img ">
                            <img src="assets/img/gallery/about.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption">
                            <div className="section-tittle section-tittle3 mb-35">
                                <span>About Our company</span>
                                <h2>52 Years Of Experience In Hair cut!</h2>
                            </div>
                            <p className="mb-30 pera-bottom">Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.</p>
                            <p className="pera-top mb-50">Brook presents your services with flexible, convefnient and ent anipurpose layouts. You can select your favorite.</p>
                            <img src="assets/img/gallery/signature.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <img src="assets/img/gallery/about-shape.png" alt=""/>
            </div>
        </section>
        
         <section class="service-area section-padding30" id='services'>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                        <div class="section-tittle text-center mb-90">
                            <span>Professional Services</span>
                            <h2>Our Best services that  we offering to you</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Stylish Hair Cut</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption active text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-fitness"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Body Massege</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div> 
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-clock"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Breard Style</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption active text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-fitness"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Body Massege</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div> 
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-clock"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Breard Style</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="services-caption text-center mb-30">
                            <div class="service-icon">
                                <i class="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div class="service-cap">
                                <h4><a href="#">Stylish Hair Cut</a></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
       
        
        <div className="best-pricing section-padding2 position-relative">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-tittle mb-50">
                            <span>Our Best Pricing</span>
                            <h2>We provide best price<br/> in the city!</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Styling. . . . . . . . . . . . . . . . . . . . . . . . . . . . <span>$25</span></li>
                                        <li>Styling + Color. . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Styling + Tint. . . . . . . . . . . . . . . . . . . . . .<span>$65</span></li>
                                        <li>  Semi-permanent wave. . . . . . . . . . . . .<span>$65</span></li>
                                        <li> Cut + Styling. . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li> Cut + Styling + Color. . . . . . . . . . . . . <span>$100</span></li>
                                        <li> Cut + Styling + Tint. . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Cut. . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>$25</span></li>
                                        <li>Shave. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Beard trim. . . . . . . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + beard trim. . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + shave. . . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li>Clean up. . . . . . . . . . . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-img">
                <img className="pricing-img2" src="assets/img/gallery/pricing1.png" alt=""/>
            </div>
        </div>
        
        <div className="gallery-area section-padding30">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                        <div className="section-tittle text-center mb-100">
                            <span>our image gellary</span>
                            <h2>some images from our barber shop</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img "style={{backgroundImage: "url(assets/img/gallery/gallery.png)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery2.png)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery3.png)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery4.png)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    <Footer />
    </>
  )
}

export default Index