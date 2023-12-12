import React from 'react';
import EntryItem from '../ui/EntryItem';

export default function Entries({ entries }) {
  return (
    <>
      <a href="/entries/new" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Write about Broccoli</a>
      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {entries?.map((el) => <EntryItem key={el.id} entry={el} />)}
        </ul>
      </main>
    </>
  );
}
