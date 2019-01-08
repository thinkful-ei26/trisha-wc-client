import React, { Component } from 'react';
import './WhatsCooking.css';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visited: false
    }
  }
  
  //check if the item exist in local storage, if it does, set state
  componentWillMount(){
    //this will only log if the visited item on storage does not exists, first time 
    if(!localStorage.getItem('visited')) {
      // console.log('have you visited before?');
      this.setState({
        visited: true
      })
    } else {
      this.setState({
        visited: true
      })
    }
  }

  //happens after WillMount, if visited item on storage does not exist, then set state to false
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
    localStorage.setItem('visited', 'user has visited before')
  }

  render() {
    // console.log('state',this.state);
    if(!this.state.visited) {
     return (
      <main className="whats-cooking">
        <div 
          className="first-timer"
          aria-live="polite"
        > 
          <div className="first-timer-content">
            <h3>How to use this app</h3> 
            <p>
              <strong>What's Cooking</strong> is a full-stack app that can help you narrow down your choices. On page load, a user can: 
            </p>
            <ul className="info-text-list">
              <li>Browse through the recipe list for meal ideas and click on a recipe for instructions to make the dish.</li>
              <li>Not sure what to cook? Click the "Surprise Me" button to generate a random recipe.</li>
              <li>Add a new recipe to the "What's Cooking?" app by clicking on the "+ Add Recipe" button</li>
            </ul>
            <p>A user does not need to login in order to use my app.</p>         
            <br/>
            <a
              className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
            >
              GitHub Repo
            </a>
          </div>      
        </div>
        <TopNav />
        <RecipeList />
      </main>
      )
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
