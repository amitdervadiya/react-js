import React, { useState } from 'react';

import thumb1 from './photos/logo2.png';
import thumb2 from './photos/logo3.png';
import thumb3 from './photos/logo4.png';



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import Header from './Header';

export default function Projects() {
    const projects = [
        {
            num: '01',
            category: 'frontend',
            title: 'project 1',
            description: 'Lorem ipsum dolor stes praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
            Stack: [
                { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }
            ],
            image: thumb1,
            live: '',
            github: '',
        },
        {
            num: '02',
            category: 'fullstack',
            title: 'project 2',
            description: 'Lorem ipsum doloro vero ipsam cis volnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
            Stack: [
                { name: "react js" }, { name: "Bootstrap" }, { name: "Javascript" }
            ],
            image: thumb2,
            live: '',
            github: '',
        },
        {
            num: '03',
            category: 'frontend',
            title: 'project 3',
            description: 'Lorem ipsum dolor sit ero ipsam cum  praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
            Stack: [
                { name: "react js" }, { name: "Tailwind.css" }, { name: "Javascript" }
            ],
            image: thumb3,
            live: '',
            github: '',
        },
    ];

    const [project, setProject] = useState(projects[0]);
    const HandleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex; // Correct property
        setProject(projects[currentSlide]);
    };

    return (
        <>
         <Header/>
            <div className="container hero1">
                <div className="row projects-row">
                    <div className="col-lg-6 col-md-12 pro">
                        <div className="text leading-none">{project.num}</div>
                        <h2 className="category">{project.category} Project</h2>
                        <p className="desc">{project.description}</p>
                        <ul type="none" className="p-0 list">
                            {project.Stack.map((item, index) => (
                                <li key={index}>
                                    {item.name}
                                    {index !== project.Stack.length - 1 && ','}
                                </li>
                            ))}
                        </ul>
                        <div className="border"></div>
                    </div>
                    <div className="col-lg-6 col-md-12 ">
                        <Swiper spaceBetween={0} slidesPerView={1} className='swiper1' onSlideChange={HandleSlideChange} >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='slide1'>
                                    <div className='slide2 '>
                                        <div></div>
                                        <div className=' img-slides'>
                                            <img src={project.image} alt="" fill className='imgslide' />
                                        </div>

                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
