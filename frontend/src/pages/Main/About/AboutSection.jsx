import React, { useState, useEffect } from 'react'
import './_aboutStyle.scss'
import { getAllAbout, getAllBenefit, getAllWater } from '../../../api/requests';

export default function AboutSection() {

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
            <img className='about-img' src="https://slavyanka.az/static/media/banner.3f0bf8e7.jpg" width='100%' alt="banner" />
            <div className='container'>
                <div className='about-row'>
                    {abouts && abouts.map((about) => {
                        return (
                            <div>
                                <div key={about._id} className='about-first'>
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
                            <div className='about-third'>
                                <div className='about-third-text-div'>
                                    <h1 className="text-danger">{benefit.title} </h1>
                                    <p>{benefit.desc}</p>
                                    {/* <p>Bulaq suyunun minerallarla zəngin olması həm də onun müalicəvi məqsədlərlə istifadəsini təyin edir. “Slavyanka” və “Gədəbəy” sularının tərkibindəki metaselikat turşusu böyrək və öd yolları üçün faydalıdır. pH-ı 8,2 olduğuna görə bu su insanlarda piylənmənin qarşısını alır, antioksidant təsirə malikdir.</p> */}
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
