import React from 'react';

function Edit({ entry }) {
  return (
    <>
      {entry
        ? (
          <div>
            <h1>Revise your thoughts on broccoli ...</h1>

            <form method="post" action={`/entries/${entry.id}/edit`} id="editEntryForm">
              <label htmlFor="title-input" className="block mar-b-1">Title:</label>
              <input
                id="title-input"
                name="title"
                type="text"
                className="block w-100 no-outline no-border pad-1 mar-b-2"
              />

              <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
              <textarea
                id="body-textarea"
                name="body"
                className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
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
