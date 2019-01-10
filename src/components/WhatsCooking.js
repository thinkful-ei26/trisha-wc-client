import React, { Component } from 'react';
import '../styles/WhatsCooking.css';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visited: false, 
      close: false
    }
  }
  
  //componentWillMount checks if an item exist in local storage
  componentWillMount(){
    //if item 'visited' on local storage does not exist, set the prop visited to false
    if(!localStorage.getItem('visited')) {
      this.setState({
        visited: false
      })
    } else {
      this.setState({
        visited: true
      })
    }
  }

  //setState below happens after ComponentWillMount fires, if 'visited' item on storage does not exist, then set state to false
  componentDidMount(){
    if(!localStorage.getItem('visited')) {
      this.setState({
        visited: false
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('visited', 'user has visited before')
  }

  closeClick() {
    this.setState({
      close: true
    })
  }

  render() {
    //if this is user's first time visiting (i.e. localStorage doesn't have visited item, then render the app with info div 'first-timer')
    if(!this.state.visited && !this.state.close) {
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
            <button
              className="got-it-btn" 
              onClick={() => { this.closeClick() }}
            >
              Close
            </button>
          </div>      
        </div> 
        <TopNav />
        <RecipeList />
      </main>
      )
    } else {
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
