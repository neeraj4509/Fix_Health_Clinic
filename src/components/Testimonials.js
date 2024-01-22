import React from 'react';
import './Testimonials.css';

import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';


function Testimonials() {
  
  const testimonials = [
    { id: 1, text: "I had a wonderful experience with the services. Highly recommended!", author: "John Doe"  , imageURl : image1,},
    { id: 2, text: "The professionalism and care I received were top-notch. Thank you!", author: "Jane Smith" , imageURl :image2,},
    { id: 3, text: "Fantastic service! I felt comfortable and well-informed throughout.", author: "Emily Johnson" , imageURl : image3,},
    { id:4, text: "Six Month with Fix Health was less than 1 month of my insurance co-pay", author:"Nasir Kamal", imageURl :image4,}
  ];

  return (
    <section className="testimonials-container">
      <h7 className="testimonials-heading">Amazing Patient Recovery Stories</h7>
        <div className="testimonials-section">
      
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <img src={testimonial.imageURl} alt={testimonial.author} className="testimonial-image" />
          <p>{testimonial.text}</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Testimonials;
