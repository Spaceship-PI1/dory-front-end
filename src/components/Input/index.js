import React from 'react';

import './style.css';

export default function Input({
  className,
  required,
  name,
  question,
  type,
  placeholder,
  register,
}) {
  return (
    <div>
      <div className="label-required">
        <label htmlFor={name}>{question}</label>
        <label id={required}>*</label>
      </div>
      <input
        {...register(name)}
        className={className}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
