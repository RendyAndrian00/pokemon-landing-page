import React, { Component } from "react";
// import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { deleteTempTodoList, getTodoList } from "../action/listToDoAction";

class DetailPokemons extends Component {
  componentDidMount() {
    this.props.dispatch(getTodoList());
    this.props.dispatch(deleteTempTodoList());

  }
  render() {
    return (
        <div className="container flex-center shadow py-4">
            <h2 className="">PokeDex</h2>
            <small className="text-muted">Is your pokemon on our Codex?</small>
            <div className="search-container col-md-8 col-sm-5">
            </div>
            <div className="col-md-8 col-sm-5 pokemon-card" id="pokemon_details">
          <div className="img-container">
              <img id="update_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="" srcset=""/>
          </div>
          <div className="detail-container">
              <div className="title-container">
                  <h3 className="name text-center" id="update_name">Pikachu</h3>
                  <hr className="seperator" style={{height:'10px', backgroundColor:'#6eecb7'}}/>
                  <div className="stats text-center">
                      <span className="first cp-text col-md-6" id="update_hp">HP 32/32</span>
                      <span className="cp-text col-md-6" id="update_cp">XP 149</span>
                  </div>
              </div>
              <button className="btn-transfer">TRANSFER</button>
              <div className="attributes-container">
                  <div className="col attributes-content" style={{minWidth: '42%'}}>
                      <p className="cp-text" id="update_type">Electric / Speed</p>
                      <small className="text-muted">Type</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text" id="update_weight">5.58kg</p>
                    <small className="text-muted">Weight</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text no-border" id="update_height">0.82m</p>
                    <small className="text-muted">Height</small>
                  </div>
              </div>
              <div className="player-data">
                  <div className="col data-container">
                  <p className="stardust" id="update_stardust">500</p>
                  <p className="muted-text">Stardust</p>
                  </div>
                  <div className="col data-container">
                  <p className="stardust" id="update_candy">1</p>
                  <p className="muted-text" id="update_candy_title">Pikachu Candy</p>
                  </div>
              </div>
          </div>
      </div>
        </div>
    );
  }
}

export default connect()(DetailPokemons);
