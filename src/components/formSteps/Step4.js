import React from 'react';

function Step4({ formData, setFormData }) {
  if (parseInt(formData.age) < 40) {
    return null; 
  }

  return (
    <div className="step4-container">
    
        <h4 className='head4'> Previous experience with physiotherapy:</h4>
        <select 
          value={formData.prevExperience}
          onChange={(e) => setFormData({ ...formData, prevExperience: e.target.value })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
    
    </div>
  );
}

export default Step4;
