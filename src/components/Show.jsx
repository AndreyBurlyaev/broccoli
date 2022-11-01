import React from 'react';

export default function Show({ entry }) {
  return (
    <div>
      {entry
        ? (
          <>
            <h1>{entry.title}</h1>

            <p>{entry.body}</p>

            <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
              <li className="pipe-separate left">
                <a href={`/entries/${entry.id}/edit`} className="c-white">edit</a>
              </li>

              <li className="pipe-separate left">
                <a href={`/entries/${entry.id}/delete`}>
                  <button
                    id="deleteEntryButton"
                    type="button"
                    className="no-border no-outline no-bg c-white hover-underline"
                  >
                    delete
                  </button>
                </a>
              </li>
            </ul>
          </>
        )
        : <h2> Loading </h2>}
    </div>
  );
}
