import React, { Component } from 'react';
import './WhatsCooking.css';
import Header from './Header';
import Controls from './Controls';
import Recipes from './Recipes';

class WhatsCooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      addRecipe: false
    }
  }

  handleInfoClick() {
    this.setState( { info: true } );
  }

  handleGotItClick() {
    this.setState( { info: false } );
  }

  handleAddRecipe() {
    this.setState( { addRecipe: true } );
  }

  handleCancelClick() {
    this.setState( { addRecipe: false } );
  }

  render() {
    return (
      <div className="whats-cooking">
        < Header  
          info={this.state.info}
          handleInfoClick={ () => this.handleInfoClick()}
          handleGotItClick={ () => this.handleGotItClick()}
          
          addRecipe={this.state.addRecipe}
          handleAddRecipe={ () => this.handleAddRecipe()}
          handleCancelClick={ () => this.handleCancelClick()}
        />
        <Controls />
        <Recipes />
        {/*
        <Condensed />
        <Detailed /> */}
      </div>
    );
  }
}

export default WhatsCooking;
