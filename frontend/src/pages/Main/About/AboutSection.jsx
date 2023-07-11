import React, { useState, useEffect } from 'react'
import './style.scss'
import { getAll } from '../../../api/Multer';
import { getAllAbout } from '../../../api/About';
import { getAllBenefit } from '../../../api/Benefit';
import { getAllWater } from '../../../api/Water';

export default function AboutSection() {
    const [imagees, setImagees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll().then((res) => {
            setImagees(res);
            setLoading(false);
        })
    }, [])

    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        getAllAbout().then((res) => {
            setAbouts(res);
            setLoading(false);
        });
    }, []);

    const [water, setWater] = useState([]);
    useEffect(() => {
        getAllWater().then((res) => {
            setWater(res);
            setLoading(false);
        });
    }, []);

    const [benefits, setBenefits] = useState([]);
    useEffect(() => {
        getAllBenefit().then((res) => {
            setBenefits(res);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}><span className="loader"></span></div> : (
                <>
                    {/* Multer image */}
                    {imagees && imagees.map((image) => {
                        return (
                            <div key={image._id}>
                                <img width='100%' alt="banner" className='about-img' src={image.profileImg} />
                            </div>
                        )
                    })}
                    <div style={{ marginTop: "25px" }} className='container'>
                        <div className='about-row'>
                            {abouts && abouts.map((about) => {
                                return (
                                    <div key={about._id}>
                                        <div className='about-first'>
                                            <h3>{about.title}</h3>
                                            <p>{about.desc}</p>
                                        </div>
                                        <img className='about-first-img' src={about.imageURL} alt="banner" />
                                    </div>
                                )
                            })}
                            {water && water.map((data) => {
                                return (
                                    <div key={data._id} className='about-second'>
                                        <div className='about-second-img-div'>
                                            <img src={data.imageURL} alt="banner" />
                                        </div>
                                        <div className='about-second-text-div'>
                                            <h1 className="text-danger">{data.title}</h1>
                                            <p>{data.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            {benefits && benefits.map((benefit) => {
                                return (
                                    <div key={benefit._id} className='about-third'>
                                        <div className='about-third-text-div'>
                                            <h1 className="text-danger">{benefit.title} </h1>
                                            <p>{benefit.desc}</p>
                                        </div>
                                        <div className='about-third-img-div'>
                                            <img src={benefit.imageURL} alt="banner" width='100%' />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
