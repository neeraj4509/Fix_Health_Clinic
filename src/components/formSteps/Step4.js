import React from 'react';

function Step4({ formData, setFormData }) {
  const isOlderThan40 = parseInt(formData.age) >= 40;
  const showPreviousExperienceField = formData.prevExperience === 'yes';

  // Handler for changes in the previous experience dropdown
  const handlePrevExperienceChange = (e) => {
    setFormData({ ...formData, prevExperience: e.target.value });
  };

  // Handler for changes in the previous experience description input
  const handlePrevExperienceDescChange = (e) => {
    setFormData({ ...formData, prevExperienceDesc: e.target.value });
  };

  if (!isOlderThan40) {
    return null;
  }

  return (
    <div className="step4-container">
      <h4 className='head4'>Previous experience with physiotherapy:</h4>
      <select 
        value={formData.prevExperience}
        onChange={handlePrevExperienceChange}
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      {showPreviousExperienceField && (
        <input
          type="text"
          placeholder="Describe your previous experience"
          value={formData.prevExperienceDesc || ''}
          onChange={handlePrevExperienceDescChange}
        />
      )}
    </div>
  );
}

export default Step4;
