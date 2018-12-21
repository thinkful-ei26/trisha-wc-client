import React from 'react';
import TopNav from './TopNav';
import InfoModal from './InfoModal';
import AddRecipe from './AddRecipe';

export default function Header(props) {

  if(props.info === true) {
    return (
    < InfoModal info={props.info} handleGotItClick={ props.handleGotItClick}/>)
  }

  if(props.addRecipe === true) {
    return (
      < AddRecipe 
        addRecipe={props.addRecipe} 
        handleCancelClick={ props.handleCancelClick}
      />
    )
  }
    
  return (
    <header>
      <TopNav 
      info={props.info}
      handleInfoClick={props.handleInfoClick}
      handleAddRecipe={props.handleAddRecipe}
      />
      <h1 className="whats-cooking-header ">What's Cooking?</h1>
    </header>
  );
};
