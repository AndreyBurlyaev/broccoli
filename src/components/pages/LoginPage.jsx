import React from 'react';
import axios from 'axios';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="form-container"
    >
      <div className="form-group">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
        >
          Email address
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div className="form-group">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label"
        >
          Password
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
