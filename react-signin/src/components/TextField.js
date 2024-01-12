import React, { useState } from 'react';

const TextField = ({ label, type, value, onChange, onBlur, error }) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    onBlur && onBlur();
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={`mt-1 p-2 border rounded-md w-full ${touched && error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {touched && error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextField;
