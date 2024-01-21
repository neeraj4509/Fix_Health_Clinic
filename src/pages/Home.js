import React from 'react';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <BookingForm />
      <Testimonials />
      
    </div>
  );
}

export default Home;
