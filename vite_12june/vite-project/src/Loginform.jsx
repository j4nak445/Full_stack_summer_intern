import React, { useState } from "react";

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetail = JSON.parse(localStorage.getItem("userData"));
    console.log('>>>>>>>>>', userDetail);

    if (userDetail && userDetail.email === email && userDetail.password === password) {
      alert('login success');
      setEmail('');
      setPassword('');
    } else {
      alert('invalid email or password');
    }
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Loginform;