import React from 'react'
import "./_3cardsStyle.scss"
import { useState, useEffect } from "react";
import { getAllThreeCards } from '../../../api/requests';

export default function ThreeCards() {
  const [threeCards, setThreeCards] = useState([])

  useEffect(() => {
    getAllThreeCards().then((res) => {
      setThreeCards(res);
    });
  }, []);
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='cards'>
            {
              threeCards && threeCards.map((threeCard) => {
                return (
                  <div key={threeCard._id} className="card-col-3">
                    <img src={threeCard.imageURL} alt="foto" />
                    <p className='card-head'>{threeCard.title}</p>
                    <p className='card-desc'>{threeCard.desc}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
