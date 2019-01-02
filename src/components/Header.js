import React from 'react';
import TopNav from './TopNav';

export default function Header(props) {

  return (
    <header>
      <TopNav />
      <h1 className="whats-cooking-header ">What's Cooking?</h1>
    </header>
  );
};
