import React from 'react'
import Navbar from '../../../components/Main/NavbarOther/Navbar';
import ContactInfo from './ContactInfo';
import Suggestions from './Suggestions.jsx';
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Slavyanka || Contact</title>
      </Helmet>
      <Navbar />
      <ContactInfo />
      <Suggestions />
    </>
  )
}


// import React from 'react'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import Navbar from '../../../components/Main/NavbarOther/Navbar';

// export default function Contact() {
//   const images = [
//     "https://cdn.slavyanka.az/uploads/9f172eaf-03f8-475d-b3d4-9fdf0f88223b.png",
//     "https://cdn.slavyanka.az/uploads/769036de-270c-45ee-8589-16f0f81e98f3.jpg",
//     "https://cdn.slavyanka.az/uploads/bdc3369f-5058-4d3b-b7b0-2157b8e08430.jpg",
//   ];

//   return (
//     <>
//       <Navbar />
//       <Slide>
//         <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//             <span>Slide 1</span>
//           </div>
//         </div>
//         <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//             <span>Slide 2</span>
//           </div>
//         </div>
//         <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//             <span>Slide 3</span>
//           </div>
//         </div>
//       </Slide>
//     </>
//   )
// }
