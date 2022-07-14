import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EntryItem from './EntryItem';

export default function Entries({ entries }) {
  const [entriesArr, setEntriesArr] = useState(entries || null);

  useEffect(() => {
    if (!entriesArr) {
      axios('/api/v1/entries')
        .then((res) => setEntriesArr(res.data));
    }
  }, []);

  return (
    <>

      <Link to="/entries/new" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Write about Broccoli</Link>

      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {entriesArr?.map((el) => <EntryItem key={el.id} entry={el} />)}
        </ul>
      </main>
    </>
  );
}
