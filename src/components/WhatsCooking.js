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
        <div className="header-content">
          <div className="header-left"></div>
          <div className="header-center"></div>
          <div className="header-right"></div>
        </div>
        < TopNav />
        <Controls />
        <RecipeList />
        
      </main>
    );
  }
}

export default WhatsCooking;
