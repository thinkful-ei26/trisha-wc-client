import React, { Component } from 'react';
import './WhatsCooking.css';
import Header from './Header';
import Controls from './Controls';
import RecipeList from './RecipeList';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <div className="whats-cooking">
        < Header />
        <Controls />
        <RecipeList />
      </div>
    );
  }
}

export default WhatsCooking;
