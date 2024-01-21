import React from 'react';

function Step1({ formData, setFormData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type= "tel" 
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        maxLength= "10"
        minLength= "10"
        pattern="\d{10}"
      />
    </div>
  );
}

export default Step1;
