import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, /* SubmissionError, focus */ } from 'redux-form';
import Input from './Input';
import { cancel } from '../actions/nav';
// import { required, nonEmpty, validInput } from '../validators';

export class ReportForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
    
    const renderIng = ({ fields, meta: { error } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add Ingredient
          </button>
        </li>
        {fields.map((ing, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
            >Remove Ingredient</button>
            <Field
              name={ing}
              type="text"
              component={renderField}
              label={`Ingredient #${index + 1}`}
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );
    
    return (
      <div className="add-recipe-overlay">
        <form
          onSubmit={handleSubmit(values => this.onSubmit(values) )}
        >
        <fieldset>
          <legend>Create a new recipe</legend>
     {/*    {successMessage}
        {errorMessage} */}
          <Field 
            element="input"
            name="recipeTitle" 
            type="text"
            component={Input}
            label="Recipe Title:"
            id="recipeTitle" 
          />

          <Field 
            element="textarea"
            name="desc" 
            type="textarea"
            id="desc"
            component={Input}
            label="Description:"
          />

          <FieldArray 
          name="ing"
          component={renderIng}
          />

          <Field 
            element="input"
            name="imgUrl" 
            type="text"
            component={Input}
            label="Image URL:"
            id="imgUrl" 
          />

          <Field 
            element="select"
            name="prep"
            component={Input}
            id="prep"
            label="Prep Time:"
          >
            <option>Duration:</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1 hour 30 minutes</option>
            <option value="120">2 hours</option>
          </Field>

          <Field 
            element="select"
            name="cook"
            component={Input}
            id="cook"
            label="Cook Time:"
          >
            <option>Duration:</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1 hour 30 minutes</option>
            <option value="120">2 hours</option>
          </Field>

          {/* disable button if user hasn't touched form */ }
          <button 
            type="submit"
            disabled={pristine || submitting}
          >
            Save Recipe
          </button>

          <button 
            type="button" 
            disabled={pristine || submitting} 
            onClick={reset}>Clear Values
          </button>

          <button 
            className="close"
            onClick={ () => this.props.dispatch(cancel()) }
            >Cancel</button>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addRecipe'
})(ReportForm);