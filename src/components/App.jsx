import React from 'react';
import Header from './ui/Header';

function App({ children }) {
  return (
    <>
      <Header />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center">
          {children}
        </div>
      </div>
    </>
  );
}

export default App;
