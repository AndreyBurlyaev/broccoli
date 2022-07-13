import React from 'react';

export default function EntryItem({ entry }) {
  return (
    <li className="entry-item pad-b-4">
      <a href={`/entries/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
      <p className="entry-stub">{entry.body}</p>
    </li>
  );
}
