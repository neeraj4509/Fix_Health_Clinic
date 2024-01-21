import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

import Step1 from './formSteps/Step1';
import Step2 from './formSteps/Step2';
import Step3 from './formSteps/Step3';
import Step4 from './formSteps/Step4';
import Step5 from './formSteps/Step5';
import Step6 from './formSteps/Step6';

function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCity = queryParams.get('city');

  const [currentStep, setCurrentStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [confirmationData, setConfirmationData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: urlCity || '',
    occupation: '',
    chiefComplaints: '',
    prevExperience: '',
    selectedDoctor: '',
    consulationSlot: '',
  });

  const handleBookingComplete = (data) => {
    setConfirmationData(data);
    setBookingComplete(true);
  };

  const nextStep = () => {
    let canProceed = false;
  
  switch (currentStep) {
    case 1:
     
      canProceed = formData.name.trim() !== '' && /^\d{10}$/.test(formData.phoneNumber);
      if (!/^\d{10}$/.test(formData.phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return; 
      }
      break;
    case 2:
      
      canProceed = formData.age.trim() !== '' && formData.city.trim() !== '' && formData.occupation.trim() !== '';
      break;
    case 3:
      
      canProceed = formData.chiefComplaints.trim() !== '';
      break;
    case 4:
      
      if (parseInt(formData.age, 10) >= 40) {
        canProceed = formData.prevExperience.trim() !== '';
      } else {
        
        canProceed = true;
      }
      break;
    case 5:
     
      canProceed = formData.selectedDoctor.trim() !== '';
      break;
    default:
      canProceed = true; 
  }

  
  if (canProceed) {
    if (currentStep === 3 && parseInt(formData.age, 10) < 40) {
      setCurrentStep(5); 
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  } else {
    
    alert('Please fill in all required fields before proceeding.');
  }
  };

  const prevStep = () => {
    if (currentStep === 5 && parseInt(formData.age, 10) < 40) {
      setCurrentStep(3);
    } else if (currentStep > 1) {
      
      setCurrentStep(currentStep - 1);
    }
  };

  

  const renderFormStep = () => {

    if (bookingComplete) {
      return (
        <div className="confirmation-message">
          <h3>Thank You, {confirmationData.name}!</h3>
          <p>Your Appointment is Booked with {confirmationData.doctorName} on {confirmationData.date} at {confirmationData.slot}</p>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step5 formData={formData} setFormData={setFormData} />;
      case 6: 
        return <Step6 formData={formData} setFormData={setFormData} onBookingComplete={handleBookingComplete} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="booking-form">
      {!bookingComplete && <h2 className='form-heading'>Book an Appointment</h2>}
      {currentStep >1 && !bookingComplete && (
        <div className="progress-indicators">
          {[1, 2, 3, 4, 5, 6].map(step => (
            <div key={step} className={`indicator ${step <= currentStep ? 'completed' : ''}`}></div>
          ))}
        </div>
      )}
      {renderFormStep()}
      {!bookingComplete && (
      <div className="form-navigation">
        {currentStep > 1 && currentStep !==6 && <button onClick={prevStep}>Back</button>}
        {currentStep < 6 && <button onClick={nextStep}>Next</button>}
      </div>
      )}
    </div>
  );
}

export default BookingForm;
