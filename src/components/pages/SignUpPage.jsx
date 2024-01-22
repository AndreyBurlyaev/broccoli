import React from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/signup', Object.fromEntries(new FormData(e.target)));
    //   console.log(response, 'resp<<<<<++++++++++++++++');
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
          <input name="username" type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
