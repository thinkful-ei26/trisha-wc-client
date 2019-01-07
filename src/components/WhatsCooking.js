import React, { Component } from 'react';
import './WhatsCooking.css';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        <TopNav />
        <SearchForm />
        <RecipeList />
      </main>
    );
  }
}

export default WhatsCooking;
