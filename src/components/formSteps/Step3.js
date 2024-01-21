import React from 'react';

function Step3({ formData, setFormData }) {
  return (
    <div>
      <textarea
      className="form-textarea"
        placeholder="Chief Complaints"
        value={formData.chiefComplaints}
        onChange={(e) => setFormData({ ...formData, chiefComplaints: e.target.value })}
      />
    </div>
  );
}

export default Step3;
