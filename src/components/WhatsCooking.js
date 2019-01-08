import React, { Component } from 'react';
import './WhatsCooking.css';
// import SearchSection from './SearchSection';
import SearchForm from './SearchForm';
// import RecipeList from './RecipeList';
import TopNav from './TopNav';
import Controls from './Controls';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        <TopNav />
        {/* <SearchSection /> */}
        <Controls />
        <SearchForm />
        {/* <RecipeList /> */}
      </main>
    );
  }
}

export default WhatsCooking;
