import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import DetailPokemons from "../components/DetailPokemonComponent";
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
        <div className="container flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-6/12 px-4 md:px-4 ">
            <TableComponent/>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <DetailPokemons/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(HomeContainers);
