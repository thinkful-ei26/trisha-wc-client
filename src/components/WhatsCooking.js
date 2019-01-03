import React, { Component } from 'react';
import './WhatsCooking.css';
// import Header from './Header';
import Controls from './Controls';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        < TopNav />
        <Controls />
        <RecipeList />
      </main>
    );
  }
}

export default WhatsCooking;
