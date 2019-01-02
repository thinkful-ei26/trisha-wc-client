import React, { Component } from 'react';
import './WhatsCooking.css';
// import Header from './Header';
// import Controls from './Controls';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        <header>
          <h1 className="whats-cooking-header">What's Cooking?</h1>
        </header>
        < TopNav />
        {/* <Controls /> */}
        <RecipeList />
        
      </main>
    );
  }
}

export default WhatsCooking;
