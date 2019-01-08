import React, { Component } from 'react';
import './WhatsCooking.css';
import RecipeList from './RecipeList';
import InfoModal from './InfoModal';
import TopNav from './TopNav';
import { gotIt } from '../actions/nav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visited: false
    }
  }
  // //check if the item exist in local storage, if it does, set state
  componentWillMount(){
    //this will only log if the visited item on storage does not exists, first time 
    if(!localStorage.getItem('visited')) {
      console.log('have you visited before?');
      this.setState({
        visited: true
      })
    } else {
      this.setState({
        visited: true
      })
    }
    // localStorage.getItem('recipes') && this.setState({
    //   visited: true
    // })
  }

  //happens after WillMount
  componentDidMount(){
    if(!localStorage.getItem('visited')) {
      this.setState({
        visited: false
      })
    } else {
      console.log('page was loaded...welcome first timers!')
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('visited', 'stuff')
  }

  render() {
    console.log('state',this.state);
    console.log('this.props', this.props);
    if(!this.state.visited) {
     return (<main className="whats-cooking">
        <InfoModal />
        <RecipeList />
      </main>)
    }
     if(this.state.visited) {
      return (
        <main className="whats-cooking">
          <TopNav />
          <RecipeList />
        </main>
      );
    }  
  }
}

export default WhatsCooking;
