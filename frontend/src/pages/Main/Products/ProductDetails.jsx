import React from 'react'
import './_productsStyle.scss'
import Navbar from './../../../components/Main/NavbarOther/Navbar';

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className='oneProduct'>
        <div className='one-product-image'>
          <img height={500} src="https://cdn.slavyanka.az/uploads/0c7a3aea-f32a-44db-9377-bbbd9042473e.png" alt="" />
        </div>
        <div className='one-product-desc'>
          <h2>19 l, PC (dispenser-Sadəcə Su)</h2>
          <p className="colort2">Bidon</p>
          <p className="colort1">“Slavyanka” Azərbaycanın ilk qazsız qablaşdırılmış mineral süfrə suyu markasıdır və 2004-cü ildən bəri Gədəbəy dağlarındakı saf bulaqlardan toplanan sulardan əldə olunur. Hazırda dəniz səviyyəsindən 1500 metr hündürlükdə yerləşən Gədəbəy dağlarındakı 12 bulaqdan fabrikimizə su daxil olur. Bulaqlardan gələn sular Gədəbəyin Zəhmət kəndindəki fabrikdə toplanır, mineral tərkibi qorunmaqla çox detallı təmizləmə prosedurlarından keçir, istehsal olunur və Azərbaycanın bütün regionlarına çatdırılır.</p>
          <div className='makro-elements'>
            <div className="colort4"> CA2+ - &lt;32mq/l </div>
            <div className="colort4"> Na+-&lt;25mq/l</div>
            <div className="colort4"> HCO-3 - &lt;125mq/l </div>
            <div className="colort4">J- - &lt;0.011mq/l</div>
            <div className="colort4">pH-7.10-7.70 </div>
            <div className="colort4"> SO42- - &lt;30mq/l </div>
            <div className="colort4"> K+-&lt;1mq/l </div>
            <div className="colort4"> Cl--&lt;5mq/l </div>
            <div className="colort4">Mg2+-&lt;7mq/l</div>
          </div>
          <div className='one-product-count'>
            <p className='colort1'>Məhsulun qiyməti:</p>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
