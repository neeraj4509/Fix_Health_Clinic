import React, { useState } from 'react';
import '../BookingForm.css';

function Step6({ formData, setFormData , onBookingComplete}) {
 
  const availableSlots = [
    '9:00 AM',  '10:00 AM', '11:00 AM',  '12:00 AM', '01:00 PM' , '02:00 PM'
  ];

  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotSelection = (slot) => {
    
    setSelectedSlot(slot);
    setFormData({ ...formData, consultationSlot: slot });
  };



  const handleSubmit = () => {
   
    onBookingComplete({
        name: formData.name,
        doctorName: formData.selectedDoctor,
        date: formData.consultationDate, 
        slot: selectedSlot,
    });
  };

  return (
    <div className="step6-container">
      <h3 className='head6'>Pick Your Consultation Slot</h3>
      <input
        type="date"
        className="date-picker"
        min = {new Date().toISOString().split('T')[0]}
        onChange={(e) => setFormData({ ...formData, consultationDate: e.target.value })}
        value={formData.consultationDate}
      />

      <div className="slots">
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => handleSlotSelection(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      <div className="form-navigation">
        <button className="book-btn" onClick={handleSubmit}>Book Appointment</button>
      </div>
    </div>
  );
}

export default Step6;
