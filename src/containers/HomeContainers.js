import React, { Component } from "react";
import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';
import TableComponent from "../components/TableComponent";
import DetailPokemons from "../components/DetailPokemonComponent";
import { connect } from "react-redux";
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
        <div className="container flex flex-wrap items-center mb-8">
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
        <div className="container flex my-20 flex-wrap">
          <div className="w-full md:w-12/12 lg:w-12/12 lg:px-0 text-center my-8">
              <h3><b>Card Pokemon Go</b></h3>
              <p className="px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
        </div>
        <div className="container w-full flex my-20 flex-wrap bg-yellow-600 rounded-lg py-5 shadow">
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 my-20">
              <p className="px-8">
                <center>
                  <img src={card1} className="p-0 m-0 shadow" style={{width:'100%'}} alt=""/>
                </center>
              </p>
              
              <p className="px-8">
                <center>
                  <img src={card2} className="p-0 m-0 shadow" style={{width:'100%'}} alt=""/>
                </center>
              </p>
              <p className="px-8">
                <center>
                  <img src={card3} className="p-0 m-0 shadow" style={{width:'100%'}} alt=""/>
                </center>
              </p>
              <p className="px-8">
                <center>
                  <img src={card4} className="p-0 m-0 shadow" style={{width:'100%'}} alt=""/>
                </center>
              </p>

          </div>
        </div>
      </div>
    );
  }
}

export default connect()(HomeContainers);
