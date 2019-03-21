import React, { Component } from 'react';
import '../styles/WhatsCooking.css';
import RecipeList from './RecipeList';
import TopNav from './TopNav';

export class WhatsCooking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visited: false, 
      close: false,
      addRecipe: false
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
       <TopNav />
        <div 
          className="first-timer"
          aria-live="polite"
          ref={(ref) => this._div = ref} 
        > 
          <div className="first-timer-content"> 
          <h2>
            How to use this app
          </h2>
          <p>
            Get inspired by <strong>What’s Cooking</strong>, a public recipe database that can help you narrow down your choices. Without logging in, you can:
          </p>
          <ul className="info-text-list">
            <li>Browse through the recipe list for meal ideas</li>
            <li>Click on a recipe to view detailed instructions</li>
            <li>Need inspiration? Click the "Surprise Me" button to generate a random recipe.</li>
            <li>Add a new recipe to the "What's Cooking?" app by clicking on the "+ Add Recipe" button</li>
          </ul>

          <h3>Search for a recipe and start using the app now!</h3>          
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
