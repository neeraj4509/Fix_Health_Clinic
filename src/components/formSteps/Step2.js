import React from 'react';

function Step2({ formData, setFormData }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
      />
    </div>
  );
}

export default Step2;
