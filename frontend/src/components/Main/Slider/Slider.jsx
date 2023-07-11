import React from 'react'
import './_slider.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

export default function Slider() {
    const proprietes = {
        duration: 1300,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

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
                        <div className='slide-1-img'></div>
                    </div >
                    <div className="each-slide"></div>
                    <div className="each-slide-3"></div>
                </Slide >
            </div >
        </>
    )
} 