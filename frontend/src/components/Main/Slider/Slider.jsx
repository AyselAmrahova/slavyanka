import React from 'react'
import './_slider.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

export default function Slider() {
    const proprietes = {
        duration: 10500,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }
    const images = [
        "https://cdn.slavyanka.az/uploads/9f172eaf-03f8-475d-b3d4-9fdf0f88223b.png",
        "https://cdn.slavyanka.az/uploads/769036de-270c-45ee-8589-16f0f81e98f3.jpg",
        "https://cdn.slavyanka.az/uploads/bdc3369f-5058-4d3b-b7b0-2157b8e08430.jpg",
    ];
    return (
        <>
            <div className="containerSlide">
                <Slide {...proprietes}>
                    <div className="each-slide-1">
                        <div className='slide-1-text'>
                            <h1> Saf, təbii və sağlam Slavyanka suları</h1>
                            <p> Slavyanka sifariş edin, biz cəmi 24 saat ərzində ünvanınıza çatdırırıq</p>
                            <div className='slider-button'>
                                <Link to='/products'>
                                    <button className='btn-order'>Sifariş et</button>
                                </Link>
                                <Link to='/about'>
                                    <button className='btn-why'>Niyə Slavyanka?</button>
                                </Link>
                            </div>
                        </div>
                        <div className='slide-1-img'>
                            <img src={images[0]} alt="img0" />
                        </div>
                    </div >
                    <div className="each-slide">
                        <div>
                            <img src={images[1]} alt="img1" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={images[2]} alt="img2" />
                        </div>
                    </div>
                </Slide >
            </div >
        </>
    )
} 