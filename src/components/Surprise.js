// import React from 'react';
// // import { connect } from 'react-redux';
// // import fetchRecipe from '../actions/surprise';

// // export class Surprise extends React.Component {

// //   componentDidMount() {
// //     this.props.dispatch(fetchRecipe());
// //   }

// //   //1. On click, do an async action to fetch one random recipe from db
// //   // refer to RecipeList, actions/index.js, and recipeReducer
// //   //2. .then render the recipe (replace the whole RecipeList with a SurpriseRecipe Component)

// //   render() {
// //     const generateRecipeElement = function(recipe) {
// //       //when the view is EXPANDED please return:
// //       if (recipe.expanded){
// //         console.log('recipe.expanded', recipe.expanded)
// //         console.log('recipe', recipe)
// //       } else { //this will return CONDENSED view
// //         console.log('recipe.expanded', recipe.expanded)
// //         console.log('recipe', recipe)
// //       }
// //     }  
  
// //     return (
// //       <div className="surprise-btn">
// //         <button
// //           onClick={ e => {
// //             console.log('surprise btn clicked. props:', this.props);
// //             console.log('e', e);
// //             generateRecipeElement(e);
// //           }}
// //         >
// //           Surprise Me
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// // export default connect()(Surprise);


// export default function Surprise(props) {

//   //1. On click, do an async action to fetch one random recipe from db
//   // refer to RecipeList, actions/index.js, and recipeReducer
//   //2. .then render the recipe (replace the whole RecipeList with a SurpriseRecipe Component)


//   return (
//     <div className="surprise-btn">
//       <button
//         onClick={ e => {
//           console.log('surprise btn clicked. props:', props);
//         }}
//       >
//         Surprise Me
//       </button>
//     </div>
//   );
// }

import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
// import Recipes from './Recipes';
// import fetchSurprise from '../actions';

export class Surprise extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(fetchSurprise());
  // }

  render () {
    return (
      <div>
        <button
          onClick={ e => {
            console.log(this.props)
            // this.props.dispatch(fetchSurprise());
          }}
        >
          Surprise Me
        </button>
        <ul 
          className="recipe-list" 
          aria-live="polite"
        >
          {console.log(this.props)}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
  }
}

export default connect(mapStateToProps)(Surprise);