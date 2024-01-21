import React from 'react';
import './Testimonials.css';

function Testimonials() {
  
  const testimonials = [
    { id: 1, text: "I had a wonderful experience with the services. Highly recommended!", author: "John Doe"  },
    { id: 2, text: "The professionalism and care I received were top-notch. Thank you!", author: "Jane Smith" },
    { id: 3, text: "Fantastic service! I felt comfortable and well-informed throughout.", author: "Emily Johnson" },
    { id:4, text: "Six Month with Fix Health was less than 1 month of my insurance co-pay", author:"Nasir Kamal"}
  ];

  return (
    <section className="testimonials-container">
      <h7 className="testimonials-heading">Amazing Patient Recovery Stories</h7>
        <div className="testimonials-section">
      
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p>{testimonial.text}</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Testimonials;
