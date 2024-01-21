import React, { useState, useEffect } from 'react';
import '../BookingForm.css'

function Step5({ formData, setFormData }) {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [noDoctorsAvailable, setNoDoctorsAvailable] = useState(false);

  useEffect(() => {
    const searchCity = formData.city.toLowerCase();

    fetch('https://neeraj4509.github.io/host_api/doctors.json')
      .then(response => response.json())
      .then(data => {
        
        const cityDoctors = data.filter(doctor => doctor.city.toLowerCase() === searchCity);
        setDoctors(cityDoctors);
        setNoDoctorsAvailable(cityDoctors.length === 0);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, [formData.city]); 

  const handleDoctorSelection = (event) => {
    setSelectedDoctor(event.target.value);
    setFormData({
      ...formData,
      selectedDoctor: event.target.value
    });
  };


  return (
    <div className="step5-container">
      <h3 className='head3'>Available Doctors in {formData.city}</h3>
      <select onChange={handleDoctorSelection} value={selectedDoctor}>
        <option value="">Select a Doctor</option>
        {noDoctorsAvailable ? (
          <option value="">No doctors available in your city</option>
        ) : (
        doctors.map((doctor, index) => (
          <option key={index} value={doctor.name}>{doctor.name} - {doctor.expertise}</option>
        )))}
      </select>
        
    </div>
  );
}

export default Step5;
