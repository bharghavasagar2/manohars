import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { createMate } from "../actions";
import { connect } from "react-redux";

class AddRoomate extends Component {
  renderInput = ({ input, label, meta: { error, touched } }) => {
    return (
      <div className="ui field">
        <label>{label}</label>
        <input {...input} />
        {touched && error}
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>Create your Roomate here </h1>
        <h3 style={{ textAlign: "center" }}>Please fill the below details</h3>
        <form
          onSubmit={this.props.handleSubmit(presenForm =>
            this.props.createMate(presenForm)
          )}
          className="ui form"
        >
          <Field
            name="location"
            component={this.renderInput}
            label="Enter Location"
          />
          <Field name="city" component={this.renderInput} label="Enter City" />
          <Field
            name="gender"
            label="Enter Gender"
            component={this.renderInput}
          />
          <Field
            name="rent"
            component={this.renderInput}
            label="Enter Rent cost"
          />
          <Field
            name="required members"
            component={this.renderInput}
            label="Enter Required Roomates"
          />
          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.location) {
    errors.location = "enter text";
  }
  if (!formValues.city) {
    errors.city = "enter text";
  }
  if (!formValues.gender) {
    errors.gender = "enter text";
  }
  if (!formValues.rent) {
    errors.rent = "enter text";
  }
  if (!formValues["required members"]) {
    errors["required members"] = "enter text";
  }
  return errors;
};

export default connect(null, { createMate })(
  reduxForm({
    validate,
    form: "Room Form"
  })(AddRoomate)
);
