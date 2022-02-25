import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postTodoList } from "../action/listToDoAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postListTodo: state.listsToDo.postListTodo,
    erorPostListTodo: state.listsToDo.erorPostListTodo,
  };
};

class ListCreate extends Component {
  handleSubmit(data) {
    this.props.dispatch(postTodoList(data));
  }
  render() {
    if(this.props.postListTodo || this.props.erorPostListTodo){
      if(this.props.erorPostListTodo){
        swal("Failed", this.props.erorPostListTodo, "error");
      }else{
        swal("Success", "User Update", "success");
      }
    }
    return (
      <Container className="rounded-xl bg-white shadow p-4">
        <BackComponent/>
        <h1>List Create</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps,null)(ListCreate)