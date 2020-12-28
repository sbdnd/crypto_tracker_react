import React, { Component } from "react";
import { Formik } from "formik";

export class Contact extends Component {
  submit = (values, actions) => {
    // console.log(values);
    // console.log(actions);
    actions.setSubmitting(false);
  };
  validate = (values) => {
    console.log({ values });
    let errors = {};
    if (values.name && values.name.length < 3) {
      errors.name = "trop court";
    }
    return errors;
  };

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.submit}
          initialValues={{ name: "", email: "" }}
          validate={this.validate}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name ? <div>{errors.name}</div> : null}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Envoyer
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Contact;
