// import React from 'react';
// import { connect } from 'react-redux';
// import { infoClick } from '../actions/nav';
// import InfoModal from './InfoModal';
// import { Route, Link } from 'react-router-dom';

// export function Button(props) {
//   if(props.info) { 
//     return (
//       <Route path="/info" component={InfoModal} />
//     )
//   } 

//   return (
//     <section className="controls">
//       <div className="header-left">
//         <button
//           className="info-btn" href="#info"
//           aria-label="How to use this app"
//           onClick={ () => {
//             props.dispatch(infoClick()) 
//             }
//           }
//         >
//           <Link to="/info">
//             <span className="info-text">INFO</span>
//           </Link>
//         </button>
//       </div>
//       {/* <div className="add-recipe-container">
//         <button
//           className="add-recipe-btn"
//           aria-label="Create a new recipe"
//           onClick={() => {
//             props.dispatch(addRecipe() )
//             }
//           }
//         >
//           <Link to="/add-recipe">
//             <span className="add-recipe-text">+ ADD RECIPE</span>
//           </Link>
          
//         </button>
//       </div> */}
//     </section>
   
//   );
// }

// export const mapStateToProps = (state) => {
//   return {
//     /* addRecipe: state.navReducer.addRecipe, */
//     info: state.navReducer.info
//   }
// };

// export default connect(mapStateToProps)(Button);