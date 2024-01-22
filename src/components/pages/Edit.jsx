import React, { useState } from 'react';

function Edit({ entry }) {
  const [inputs, setInputs] = useState({ title: entry.title, body: entry.body });

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/api/v1/entries/${entry.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
      .then(() => {
        window.location.href = '/';
      });
  };

  return (
    <>
      {entry
        ? (
          <div>
            <h1>Revise your thoughts on broccoli ...</h1>

            <form onSubmit={submitHandler} id="editEntryForm">
              <label htmlFor="title-input" className="block mar-b-1">Title:</label>
              <input
                id="title-input"
                name="title"
                onChange={inputHandler}
                value={inputs.title}
                type="text"
                required="required"
                className="block w-100 no-outline no-border pad-1 mar-b-2"
                placeholder={entry.title}
              />

              <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
              <textarea
                id="body-textarea"
                name="body"
                onChange={inputHandler}
                value={inputs.body}
                className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
                placeholder={entry.body}
              />

              <input
                type="submit"
                value="Update"
                className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
              />
            </form>
          </div>
        )
        : <h2>Loading</h2>}
    </>
  );
}

export default Edit;
