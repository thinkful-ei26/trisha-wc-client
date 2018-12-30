import React, { Component } from 'react';
import './WhatsCooking.css';
import Header from './Header';
import Controls from './Controls';
import RecipeList from './RecipeList';

class WhatsCooking extends Component {
  
  render() {
    return (
      <div className="whats-cooking">
        < Header />
        <Controls />
        <RecipeList />
        {/*
        <Condensed />
        <Detailed /> */}
      </div>
    );
  }
}

export default WhatsCooking;
