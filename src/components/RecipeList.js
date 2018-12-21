import React from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';

// export default function Recipes(props) {
//   return (
//     <div className="recipe-list">
//       <p>Bacon ipsum dolor amet alcatra chicken filet mignon beef. Pork belly turkey tri-tip pork boudin chicken ribeye, cow kevin beef ribs tongue cupim sausage ground round. Bresaola venison andouille shankle doner, ball tip prosciutto buffalo beef fatback meatball pork loin. Tri-tip salami bresaola beef ribs ham hock. Fatback sirloin brisket, pig hamburger turkey landjaeger prosciutto beef capicola pork loin cow. Turducken chuck rump kevin tri-tip, beef ribs cow venison doner strip steak leberkas swine pork pig.</p>
//     </div>
//   );
// }


export class RecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render () {
    const { recipes } = this.props;
    const recipe = recipes.map( (recipe, index) => (
      <li key={index}>
        {recipe}
      </li>
    ));

    console.log('props from RecipeList',this.props);

    return (
      <ul className="recipe-list">
        <li>{recipe}</li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList);