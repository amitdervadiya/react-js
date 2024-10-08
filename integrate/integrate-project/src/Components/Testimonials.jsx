import React, { useEffect } from 'react';
import './Main.css';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
import test1 from './photos/testimonials/testimonials-1.jpg';
import test2 from './photos/testimonials/testimonials-2.jpg';
import test3 from './photos/testimonials/testimonials-3.jpg';
import test4 from './photos/testimonials/testimonials-4.jpg';
import test5 from './photos/testimonials/testimonials-5.jpg';

export default function Testimonials() {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container section-title">
                <h2>Testimonials</h2>
                <p>What they are saying about us<br /></p>
            </div>

            <div className="container">
                <div className="swiper init-swiper swiper-config">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test1} className="testimonial-img" alt="Saul Goodman" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test2} className="testimonial-img" alt="Sara Wilsson" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test3} className="testimonial-img" alt="Jena Karlis" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test4} className="testimonial-img" alt="Matt Brandon" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test5} className="testimonial-img" alt="John Larson" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
