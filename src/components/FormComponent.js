import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import TodoListValidation from "../config/TodoListValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        className="shadow"
        min="0"
        max="1"
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues : {
      email : state.listsToDo.getListsToDoDetail.email,
      username : state.listsToDo.getListsToDoDetail.username,
      phone : state.listsToDo.getListsToDoDetail.phone,
      password : state.listsToDo.getListsToDoDetail.password,
      lastname : state.listsToDo.getListsToDoDetail.name ? state.listsToDo.getListsToDoDetail.name.lastname : "",
      firstname : state.listsToDo.getListsToDoDetail.name ? state.listsToDo.getListsToDoDetail.name.firstname : "",
      city : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.city : "",
      street : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.street : "",
      number : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.number : "",
      zipcode : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.zipcode : "",
      lat : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.geolocation.lat : "",
      long : state.listsToDo.getListsToDoDetail.address ? state.listsToDo.getListsToDoDetail.address.geolocation.long : "",
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <>
      <hr/>
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={12}>
            <h6>Personal Identity</h6>
          </Col>
          <Col md={3}>
            <FormGroup >
              <Field
                type="text"
                name="firstname"
                component={renderField}
                label="First Name :"
              />
            </FormGroup>
          </Col>
          
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="lastname"
                component={renderField}
                label="Last Name :"
              />
            </FormGroup>
          </Col>
          
          <Col md={3}>
            <FormGroup>
              <Field
                type="email"
                name="email"
                component={renderField}
                label="Email :"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="phone"
                component={renderField}
                label="Phone :"
              />
            </FormGroup>
          </Col>
          
          
          <Col md={12}>
            <h6>Address</h6>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="city"
                component={renderField}
                label="City :"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="street"
                component={renderField}
                label="Street :"
              />
            </FormGroup>
          </Col>
          
          <Col md={2}>
            <FormGroup>
              <Field
                type="number"
                name="number"
                component={renderField}
                label="Number :"
              />
            </FormGroup>
          </Col>
          
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="zipcode"
                component={renderField}
                label="Zipcode :"
              />
            </FormGroup>
          </Col>
          
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="lat"
                component={renderField}
                label="Latitude :"
              />
            </FormGroup>
          </Col>
          
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="long"
                component={renderField}
                label="Longitude :"
              />
            </FormGroup>
          </Col>




          <Col md={12}>
            <h6>Account</h6>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="username"
                component={renderField}
                label="Username :"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="password"
                name="password"
                component={renderField}
                label="Password :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="primary"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
      </>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateListToDo",
  validate: TodoListValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
