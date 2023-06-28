import React, { useState, useEffect } from 'react'
import './_aboutStyle.scss'
import { getAllAbout, getAllBenefit, getAllWater } from '../../../api/requests';

export default function AboutSection() {
    // const [imagees, setImagees] = useState([]);
    // useEffect(() => {
    //     getAll().then((res) => {
    //         setImagees(res);
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }, [])


    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        getAllAbout().then((res) => {
            setAbouts(res);
        });
    }, []);


    const [water, setWater] = useState([]);
    useEffect(() => {
        getAllWater().then((res) => {
            setWater(res);
        });
    }, []);


    const [benefits, setBenefits] = useState([]);
    useEffect(() => {
        getAllBenefit().then((res) => {
            setBenefits(res);
        });
    }, []);

    return (
        <>
            {/* {imagees && imagees.map((image) => {
                return (
                    <div  key={image._id}>
                        <img className='about-img' src={image.aboutImg} width='100%' alt="banner" />
                    </div>
                )
            })} */}
            <div className='container'>
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
    )
}
