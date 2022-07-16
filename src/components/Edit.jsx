import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit({ entry }) {
  const { id } = useParams();
  const [oneEntry, setOneEntry] = useState(entry || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.initState) {
      axios(`/api/v1/entries/${id}`)
        .then((res) => setOneEntry(res.data));
    } else {
      delete window.initState;
    }
  }, []);

  const changeEntry = (e) => {
    setOneEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editEntry = (e) => {
    e.preventDefault();
    axios.put(`/api/v1/entries/${id}`, oneEntry)
      .then(() => navigate('/'));
  };

  return (
    <>
      {oneEntry

        ? (
          <div>
            <h1>Revise your thoughts on broccoli ...</h1>

            <form onSubmit={editEntry} id="editEntryForm">
              <label htmlFor="title-input" className="block mar-b-1">Title:</label>
              <input
                id="title-input"
                name="title"
                type="text"
                value={oneEntry.title || ''}
                onChange={changeEntry}
                className="block w-100 no-outline no-border pad-1 mar-b-2"
              />

              <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
              <textarea
                id="body-textarea"
                name="body"
                value={oneEntry.body || ''}
                onChange={changeEntry}
                className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
              >
                {oneEntry.body}
              </textarea>

              <input
                type="submit"
                value="Update"
                onChange={changeEntry}
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
