import React, { Component } from "react";
// import {
//   faTimes,
//   faCheck,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableComponent from "../components/TableComponent";
import DetailPokemons from "../components/DetailPokemonComponent";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { deleteTempTodoList, getTodoList, getTodoListDetail, getTodoListItem } from "../action/listToDoAction";
import TableItemComponent from "../components/TableItemComponent";
class HomeContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getTodoList());
    this.props.dispatch(getTodoListItem());
    if(window.location.pathname.split('/')['1']!==''){
      this.props.dispatch(getTodoListDetail(window.location.pathname.split('/')['1']));
    }else{
      this.props.dispatch(getTodoListDetail('6'));
    }
    this.props.dispatch(deleteTempTodoList());
  }
  render() {
    return (
      <div className="h-auto -mt-4">
        <div className="container flex flex-wrap items-center">
          <div className="w-12/12 md:w-12/12 lg:w-6/12 lg:px-0 md:px-4">
            <div className="my-24 shadow pl-3">
              <h3 className="text-white ">Choose Your Pokemon</h3>
              <p className="text-white">Choose your Pokemon Favorit</p>
            </div>
            <TableComponent/>
            <div className="w-12/12 md:w-12/12 lg:w-12/12 lg:px-0 md:px-12 mt-4 flex">
              <div>
                <h4 className="mb-4">Item Pokemon</h4>
                <TableItemComponent/>
              </div>
            </div>
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
