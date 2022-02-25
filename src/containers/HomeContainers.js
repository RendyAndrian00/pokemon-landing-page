import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { deleteTempTodoList, getTodoList } from "../action/listToDoAction";

class HomeContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getTodoList());
    this.props.dispatch(deleteTempTodoList());

  }
  render() {
    return (
      <div className="h-auto -mt-20">
        <div className="container mx-auto max-w-full">
          {/* <div className="grid grid-cols-1 px-4 mb-16"> */}
            <TableComponent/>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default connect()(HomeContainers);
