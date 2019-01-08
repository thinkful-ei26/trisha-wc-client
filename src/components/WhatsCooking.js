import React, { Component } from 'react';
import './WhatsCooking.css';
import RecipeList from './RecipeList';
import InfoModal from './InfoModal';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstVisit: false
    }
  }
  // //check if the item exist in local storage, if it does, set state
  componentWillMount(){
    localStorage.getItem('recipes') && this.setState({
      firstVisit: true
    })
  }

  // componentWillUpdate(){
  //   localStorage.setItem('recipes', 'stuff')
  // }

  //happens after WillMount
  componentDidMount(){
    if(!localStorage.getItem('recipes')) {
      // this.fetchData();
      this.setState({
        firstVisit: false
      })
    } else {
      console.log('page was loaded...welcome first timers!')
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('recipes', 'stuff')
  }

  // fetchData() {

  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstVisit: false
  //   }
  // }
  // // //check if the item exist in local storage
  // componentWillMount(){
  //   localStorage.getItem('recipes') && this.setState({
  //     firstVisit: true
  //   })
  // }

  // // componentWillUpdate(){
  // //   localStorage.setItem('recipes', 'stuff')
  // // }

  // componentDidMount(){
  //   localStorage.setItem('recipes', 'stuff')
  // }

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
