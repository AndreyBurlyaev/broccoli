import React from 'react';

function Edit({ entry }) {
  return (
    <div>
      <h1>Revise your thoughts on broccoli ...</h1>

      <form id="editEntryForm" data-entryid={entry.id}>
        <label htmlFor="title-input" className="block mar-b-1">Title:</label>
        <input
          id="title-input"
          name="title"
          type="text"
          value={entry.title}
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
        <textarea
          id="body-textarea"
          name="body"
          value={entry.body}
          className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
        >
          {entry.body}
        </textarea>

        <input
          type="submit"
          value="Update"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </div>
  );
}

export default Edit;
