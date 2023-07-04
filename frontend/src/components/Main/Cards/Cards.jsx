import React from 'react'
import "./cards.scss"
import { useState, useEffect } from "react";
import { getAllCards } from '../../../api/Cards';

export default function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='cards'>
            {
              cards && cards.map((card) => {
                return (
                  <div key={card._id} className="card-col-3">
                    <img src={card.imageURL} alt="foto" />
                    <p className='card-head'>{card.title}</p>
                    <p className='card-desc'>{card.desc}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
