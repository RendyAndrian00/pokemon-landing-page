import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import DetailPokemons from "../components/DetailPokemonComponent";
import { connect } from "react-redux";
import { deleteTempTodoList, getTodoList, getTodoListDetail } from "../action/listToDoAction";

class HomeContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getTodoList());
    if(window.location.pathname.split('/')['1']!==''){
      this.props.dispatch(getTodoListDetail(window.location.pathname.split('/')['1']));
    }else{
      this.props.dispatch(getTodoListDetail('6'));
    }
    this.props.dispatch(deleteTempTodoList());
  }
  render() {
    return (
      <div className="h-auto -mt-20">
        <div className="container flex flex-wrap items-center">
          <div className="w-12/12 md:w-12/12 lg:w-6/12 lg:px-0 md:px-4">
            <TableComponent/>
          </div>
          <div className="w-full lg:w-6/12 md:w-12/12 mt-4">
            <DetailPokemons/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(HomeContainers);
