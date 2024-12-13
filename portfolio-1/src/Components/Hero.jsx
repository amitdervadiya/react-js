import React from 'react'


export default function Hero() {
    return (
        <>
            <div className="container hero">
                <div className="row flex flex-col">
                    <div className="col-md-12 col-lg-6 part-1 sm:order-2 lg:order-none">
                        <span className='white'>Web developer</span>
                        <h1 className='size'>Hello I'm</h1>
                        <h2 className=' size1'>amit dervadiya</h2>
                        <p className='white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse, tenetur quia repellendus in iusto laudantium impedit eligendi, eaque nam veritatis molestiae facilis asperiores suscipit ea sint, earum libero at!</p>
                        <div className="links">
                            <div className="link1">
                                <a href="#" className="link-d">
                                    Download cv <i class="fa-solid fa-download"></i>
                                </a>
                            </div>
                            <div className="link2">
                                <div className="round"><i class="fa-brands fa-github"></i></div>
                                <div className="round"><i class="fa-brands fa-linkedin-in"></i></div>
                                <div className="round"><i class="fa-brands fa-youtube"></i></div>
                                <div className="round"><i class="fa-brands fa-twitter"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 part-2 sm:order-1 lg:order-none">
                        <svg width="400" height="400" className="keycircle">
                     
                            <circle cx="200" cy="200" r="180" className="circle">

                            </circle>
                        </svg>   
                      


                    </div>
                </div>
            </div>
        </>
    )
}
