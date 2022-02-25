import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import BackComponent from "../components/BackComponent";
import { getTodoListDetail, putTodoList } from "../action/listToDoAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postListTodo: state.listsToDo.postListTodo,
    erorPostListTodo: state.listsToDo.erorPostListTodo,
  };
};

class ListEdit extends Component {
  componentDidMount() {
    this.props.dispatch(
      getTodoListDetail(window.location.pathname.split("/")["2"])
    );
  }
  handleSubmit(data) {
    this.props.dispatch(
      putTodoList(data, window.location.pathname.split("/")["2"])
    );
  }
  render() {
    if (this.props.postListTodo || this.props.erorPostListTodo) {
      if (this.props.erorPostListTodo) {
        swal("Failed", this.props.erorPostListTodo, "error");
      } else {
        swal("Success", "User Update", "success");
      }
    }
    return (
      <Container className="rounded-xl bg-white shadow p-4">
        <BackComponent />
        <h1>List Edit</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(ListEdit);
