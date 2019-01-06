import React, { Component } from 'react';
import './WhatsCooking.css';
// import SearchSection from './SearchSection';
// import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        <TopNav />
        {/* <SearchSection /> */}
        {/* <SearchForm /> */}
        <RecipeList />
      </main>
    );
  }
}

export default WhatsCooking;
