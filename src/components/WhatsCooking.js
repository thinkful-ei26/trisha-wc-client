import React, { Component } from 'react';
import './WhatsCooking.css';
import RecipeList from './RecipeList';
import InfoModal from './InfoModal';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstVisit: true
    }
  }
  //check if the item exist in local storage
  componentWillMount(){
    localStorage.getItem('recipes') && this.setState({
      firstVisit: false
    })
  }

  // componentWillUpdate(){
  //   localStorage.setItem('recipes', 'stuff')
  // }

  componentDidMount(){
    localStorage.setItem('recipes', 'stuff')
  }

  render() {
    if(!this.props.firstVisit) {
     return (<main className="whats-cooking">
        <InfoModal />
        <TopNav />
        <RecipeList />
      </main>)
    }

    return (
      <main className="whats-cooking">
        <TopNav />
        <RecipeList />
      </main>
    );
  }
}

export default WhatsCooking;
