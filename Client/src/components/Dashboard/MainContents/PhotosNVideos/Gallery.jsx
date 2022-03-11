import React from 'react';
import "./Gallery.css"

// images 

import carousel0 from "../../../images/carousel0.png"
import carousel1 from "../../../images/carousel1.png"
import carousel2 from "../../../images/carousel2.png"
import carousel3 from "../../../images/carousel3.png"
import carousel4 from "../../../images/carousel4.png"

export const Gallery = () => {
    return (
        <>
            <div className="cr-box mt-3">
                <div id="carouselExampleIndicators" class="carousel slide photosnvideos-carousel-slide" data-bs-ride="carousel">
                    <div class="carousel-indicators photosnvideos-carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                            <img className='demo-cr' src={carousel0} alt="" />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                            <img className='demo-cr' src={carousel1} alt="" />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                            <img className='demo-cr' src={carousel2} alt="" />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                            <img className='demo-cr' src={carousel3} alt="" />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5">
                            <img className='demo-cr' src={carousel4} alt="" />
                        </button>
                    </div>
                    <div class="carousel-inner photosnvideos-cr-inner">
                        <div class="carousel-item active">
                            <img src={carousel0} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel3} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel4} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="cr-desc">
                    <h4>Description</h4>
                    <p>Wed,  05 Jan | 10:35 AM </p>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia excepturi a velit earum 
                        enim natus, veniam corrupti iste quasi illum in voluptatibus et officia repellat necessitatibus 
                        facilis facere? Tenetur laborum doloribus ab iusto distinctio, asperiores quas officiis impedit 
                        aliquam cumque labore explicabo nam saepe cum in eum repellat, eveniet necessitatibus.</span>
                    <button className='read-more'>Read More &#62;</button>
                </div>
            </div>
        </>

    )
}
