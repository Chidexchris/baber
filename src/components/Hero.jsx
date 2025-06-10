import React from 'react'

function Hero({hero}) {
  return (
        <>
        
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 pt-70 text-center">
                                <h2>{hero.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)
}

export default Hero