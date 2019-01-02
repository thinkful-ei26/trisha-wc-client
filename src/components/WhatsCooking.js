import React, { Component } from 'react';
import './WhatsCooking.css';
import Header from './Header';
// import Controls from './Controls';
import RecipeList from './RecipeList';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <main className="whats-cooking">
        < Header />
        {/* <Controls /> */}
        <RecipeList />
        
      </main>
    );
  }
}

export default WhatsCooking;
