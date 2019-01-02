import React, { Component } from 'react';
import './WhatsCooking.css';
import Header from './Header';
import Controls from './Controls';
import RecipeList from './RecipeList';
import Surprise from './RecipeList';

export class WhatsCooking extends Component {
  
  render() {
    return (
      <div className="whats-cooking">
        < Header />
        <Controls />
        {/* <RecipeList /> */}
        <Surprise />
      </div>
    );
  }
}

export default WhatsCooking;
