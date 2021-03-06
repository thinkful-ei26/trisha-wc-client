import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, SubmissionError, focus } from 'redux-form';
import Input from './Input';
import { cancel } from '../actions/nav';
import { required, nonEmpty, validInput, validURL } from '../validators';
import '../styles/recipe-form.css';
import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';

export class ReportForm extends Component {
  /* ========= FORM SUBMIT TO THE DATABASE ========== */
  onSubmit(values) {
    return fetch(`${API_BASE_URL}/api/recipes/`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    /* ========= RESPONSE HANDLING ========== */
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers
            .get('content-type')
            .startsWith('application/json')
        ) {
          // It's a nice JSON error returned by us, so decode it
          return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return;
  })
  /* ========= USER FEEDBACK ON UI FORM ========== */
  .then(() => console.log('Submitted with values', values))
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({ 
          [location]: message
        })
      );
    }
    return Promise.reject(
      new SubmissionError({
        _error: 'Error submitting message'
      })
    );
  });
}
  render() {
    const { handleSubmit, pristine, submitting, reset, submitSucceeded, error } = this.props;

    /* ========= RENDER UI RESPONSES ========== */
    let successMessage;
    if (submitSucceeded) {
      successMessage = (
        <div className="message">
          <Link to="/success">
            <span className="message-success">Recipe saved successfully</span>
          </Link>
        </div>
      );
    }

    let errorMessage;
    if (error) {
        errorMessage = (
          <div className="message message-error">
            <Link to="/error">
              {this.props.error}
            </Link>
          </div>
        );
    }
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div className="ing-container">
        <label>{label}</label>
          <div className="ing-items">
            <input 
              {...input} 
              type={type} 
              placeholder={label} 
              className="ing-input"
              aria-label={label}
            />
              {touched && error && <span>{error}</span>}
          </div>
      </div>
    );
    
    const renderIng = ({ fields, meta: { error } }) => (
      <ul 
        aria-live="polite"
        className="ingredients-container"
      >
        {fields.map((ing, index) => (
          <li   
            key={index}
            className="ingredient"
          >
            <Field
              name={ing}
              type="text"
              component={renderField}
              label={`Ingredient #${index + 1}`}
              aria-label={`Ingredient #${index + 1}`}
            />
             <button
              className="remove-btn"
              type="button"
              title={`Remove Ingredient ${index +1}`}
              aria-label={`Remove Ingredient ${index +1}`}
              onClick={() => fields.remove(index)}
            >
              x
            </button>
          </li>
        ))}
        <li className="add-ingredient-list">
          <button
            className="add-btn"
            type="button" 
            onClick={() => fields.push()}
          >
            Add Ingredient
          </button>
        </li>
      </ul>
    );
    
    return (     
      <li className="add-recipe-overlay">
        <form
          className="new-recipe-form float"
          onSubmit={handleSubmit(values => this.onSubmit(values) )}
        >
        <fieldset>
        <legend>Create a new recipe</legend>
          {successMessage}
          {errorMessage}
          <Field 
            element="input"
            name="title" 
            type="text"
            component={Input}
            label="Recipe Title: "
            id="title" 
            validate={[required, nonEmpty, validInput]}
          />

          <Field 
            element="textarea"
            name="desc" 
            type="textarea"
            id="desc"
            component={Input}
            label="Description: "
            validate={[required, nonEmpty, validInput]}
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
            label="Image URL: "
            id="imgUrl" 
            validate={[validURL]}
          />

          <Field 
            element="select"
            name="serving"
            component={Input}
            id="serving"
            label="Number of Servings: "
          >
            <option># of servings:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13+">13+</option>
          </Field>

          <Field 
            element="select"
            name="prep"
            component={Input}
            id="prep"
            label="Prep Time: "
          >
            <option>Duration:</option>
            <option value="5 minutes">5 minutes</option>
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="1 hour 30 minutes">1 hour 30 minutes</option>
            <option value="2 hours">2 hours</option>
            <option value="2+ hours">2+ hours</option>
          </Field>

          <Field 
            element="select"
            name="cook"
            component={Input}
            id="cook"
            label="Cook Time: "
          >
            <option>Duration:</option>
            <option value="5 minutes">5 minutes</option>
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="1 hour 30 minutes">1 hour 30 minutes</option>
            <option value="2 hours">2 hours</option>
            <option value="2+ hours">2+ hours</option>
          </Field>

          <Field 
            element="textarea"
            name="directions" 
            type="textarea"
            id="directions"
            component={Input}
            label="Directions: "
            validate={[required, nonEmpty, validInput]}
          />

        {/* ===== FORM SUBMIT USER FEEDBACK ===== */}
          {successMessage}
          {errorMessage}

        {/* ===== FORM BUTTON CONTROLS ===== */}
          {/* disable button if user hasn't touched form */ }
           <button 
            className="save-recipe-btn"
            type="submit"
            disabled={pristine || submitting}
          >
            Save Recipe
          </button>
          <button 
            className="clear-values-btn"
            type="button" 
            disabled={pristine || submitting} 
            onClick={reset}
          >
            <Link to="clear-values">Clear Values</Link>
          </button>
          <button 
            type='button'
            className="cancel-add-recipe-btn"
            onClick={ () => this.props.dispatch(cancel()) }
          >
            <Link to="/">Cancel</Link>
          </button>
          </fieldset>
        </form>
      </li>
    );
  }
}

export default reduxForm({
  form: 'ReportForm',
  onSubmitFail: (errors, dispatch) =>
  dispatch(focus('contact', Object.keys(errors)[0])),
})(ReportForm);