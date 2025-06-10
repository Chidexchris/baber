import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'


function Portfolio() {
  return (
    <>
    <Header />
    <Hero  hero={{title: "Portfolio" }} />

     <div class="gallery-area section-padding30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="box snake mb-30">
                            <div class="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery.png)"}}></div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                        <div class="box snake mb-30">
                            <div class="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery2.png)"}}></div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                        <div class="box snake mb-30">
                            <div class="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery3.png)"}}></div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="box snake mb-30">
                            <div class="gallery-img " style={{backgroundImage: "url(assets/img/gallery/gallery4.png)"}}></div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Portfolio