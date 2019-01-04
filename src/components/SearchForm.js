// import React from 'react';
// import {searchRecipes} from '../actions/search';

// export default function Controls(props) {

//   return (
//     <section className="search-section">
//         <form 
//           id="search-form"
//           onSubmit={e => {
//             e.preventDefault();
//             let inputs = document.getElementById("search-form").elements;
//             console.log('inputs', inputs);
//             let searchTerm = inputs[0].value;
//             console.log('searchTerm', searchTerm);
//             // this.props.dispatch(searchRecipes(searchTerm))
//           }
//         }>
//           <label htmlFor="search">Search</label>&emsp;
//           <input
//               aria-controls="recipe-count"
//               type="search"
//               id="search"
//               name="search"
//               placeholder="recipe search"
//           />
//         </form>
//     </section>
//   );
// };

import React from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit';
import {searchRecipes} from '../actions/search';

export class SearchForm extends React.Component {

  componentDidMount() {
    this.props.dispatch(searchRecipes());
  }

  renderResults() {
    const { loading, error } = this.props;

    if (loading) {
      return <Spinner spinnerName="circle" noFadeIn />
    }

    if (error) {
      return <strong>{error}</strong>
    }
    
    return (
      <p>From Controls</p>
    )

  //   const recipes = this.props.recipes.map((recipe, index) =>
  //       <li key={index}>{recipe}</li>
  //     );

  //     return (
  //       <ul className="recipe-search-results">
  //           {recipes}
  //           testing...
  //       </ul>
  //     );
  }

  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    console.log(e);
    this.props.dispatch(searchRecipes(this.input.value));
  }

  render() {
    console.log('this.props on SearchForm', this.props);
    return (
      <section className="search-section">
          <form 
            id="search-form"
            onSubmit={e => {
              this.search(e);
              // let inputs = document.getElementById("search-form").elements;
              // console.log('inputs', inputs);
              // let searchTerm = inputs[0].value;
              // console.log('searchTerm', searchTerm);
              // this.props.dispatch(searchRecipes(searchTerm))
            }
          }> 
            <label htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="recipe-count"
                type="search"
                id="search"
                name="search"
                placeholder="recipe search"
                ref={input => this.input = input}
            />
            <button>Search</button>
          </form>
          <ul className="recipe-search-results">
            {this.renderResults()}
            Testing...
          </ul>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  recipes: state.searchReducer.recipes,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(SearchForm);