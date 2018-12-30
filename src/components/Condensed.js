import React from 'react';
// import { connect } from 'react-redux';
// import { toggleExpand } from '../actions/recipe';
// import recipeListReducer from '../reducers/recipeListReducer';
// import fetchRecipes from '../actions';

export default class Condensed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {expanded: false};
	}

	click() {
		this.setState({expanded: true});
	}

	render() {
		// let expadedRecipe = classnames('specialbutton', {active: this.state.expanded}); className={expadedRecipe}
		return <button onClick={ () => console.log(this.props)}>Click me</button>;
	}
}