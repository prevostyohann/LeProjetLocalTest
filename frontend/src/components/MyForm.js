import React, { useState } from 'react';

const MyForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(formData[field.name])) {
        newErrors[field.name] = 'Invalid email address';
      }else if (field.name === 'comfirm-password' && formData['password'] !== formData['comfirm-password']) { newErrors[field.name] = 'Passwords do not match'; }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          )}
          {errors[field.name] && (
            <div>{errors[field.name]}</div>
          )}
        </div>
      ))}
      <button type="submit">
        Submit
      </button>
      
    </form>
  );
};

export default MyForm;
