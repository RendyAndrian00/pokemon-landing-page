import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getTodoListDetail } from "../action/listToDoAction";
import BackComponent from "../components/BackComponent";
import DetailListComponent from "../components/DetailListComponent";

class ListDetail extends Component {
  componentDidMount(){
    this.props.dispatch(getTodoListDetail(window.location.pathname.split('/')['2']));
  }
  render() {
    return (
      <Container className="rounded-xl bg-white shadow p-4">
        <BackComponent/>
        <h1>Detail List</h1>
        <DetailListComponent/>
      </Container>
    );
  }
}
export default connect()(ListDetail)