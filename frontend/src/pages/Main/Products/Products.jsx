import React from 'react'
import Navbar from '../../../components/Main/NavbarOther/Navbar';

export default function Products() {
  return (
    <>
      <Navbar />
    </>
  )
}


// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Navbar from '../../../components/Main/NavbarOther/Navbar';



// export default function Products() {
//   return (
//     <>
//       <Navbar />
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         ...
//       </Swiper>
//     </>
//   )
// }
