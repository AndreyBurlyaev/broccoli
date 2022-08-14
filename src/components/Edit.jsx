import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Edit({ entry }) {
  const [oneEntry, setOneEntry] = useState(entry || null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/entries/${id}`)
      .then((res) => res.json())
      .then((data) => setOneEntry(data));
  }, []);

  return (
    <>
      {oneEntry

        ? (
          <div>
            <h1>Revise your thoughts on broccoli ...</h1>

            <form id="editEntryForm" data-entryid={oneEntry.id}>
              <label htmlFor="title-input" className="block mar-b-1">Title:</label>
              <input
                id="title-input"
                name="title"
                type="text"
                value={oneEntry.title}
                className="block w-100 no-outline no-border pad-1 mar-b-2"
              />

              <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
              <textarea
                id="body-textarea"
                name="body"
                value={oneEntry.body}
                className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
              >
                {oneEntry.body}
              </textarea>

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
