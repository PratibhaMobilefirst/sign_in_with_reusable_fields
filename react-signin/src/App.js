import React, { useState } from 'react';
import TextField from './components/TextField';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isFormValid = () => {
    return !emailError && !passwordError && email !== '' && password !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      // Do something with the form data
      console.log('Form submitted:', { email, password });
    } else {
      console.error('Form not valid');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  
    // Validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(e.target.value) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  
    // Validate password length
    setPasswordError(e.target.value.length >= 4 ? '' : 'Password must be at least 4 characters');
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Email is required');
    }
  };
  
  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('Password is required');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordError}
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full mt-4 ${
              isFormValid() ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isFormValid()}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;