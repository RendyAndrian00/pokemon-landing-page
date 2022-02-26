import React from "react";
import { connect } from "react-redux";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getListsToDoDetail: state.listsToDo.getListsToDoDetail,
    errorListToDoDetail: state.listsToDo.errorListToDoDetail,
  };
};

const handleClick = (dispatch, id) => {
  swal("Success", "Congratulation You Get It", "success");
};



const DetailPokemons = (props) => {
    return (
        <div className="container flex-center shadow py-4">
            <h2 className="">PokeDex</h2>
            <small className="text-muted">Is your pokemon on our Codex?</small>
            <div className="search-container col-md-8 col-sm-5">
            </div>
            <div className="col-md-8 col-sm-5 pokemon-card" id="pokemon_details">
          <div className="img-container">
              <img id="update_img" src={props.getListsToDoDetail.sprites ? props.getListsToDoDetail.sprites.other.dream_world.front_default: ""} alt="" srcset=""/>
          </div>
          <div className="detail-container">
              <div className="title-container">
                  <h3 className="name text-center" id="update_name">{props.getListsToDoDetail.name}</h3>
                  <hr className="seperator" style={{height:'10px', backgroundColor:'#6eecb7'}}/>
                  <div className="stats text-center">
                      <span className="first cp-text col-md-6" id="update_hp">HP {props.getListsToDoDetail.stats ? Math.floor((Math.random() * props.getListsToDoDetail.stats[0].base_stat) + 1) +'/'+ props.getListsToDoDetail.stats[0].base_stat : ""}</span>
                      <span className="cp-text col-md-6" id="update_cp">XP {props.getListsToDoDetail.base_experience}</span>
                  </div>
              </div>
              <button className="btn-transfer" onClick={() => handleClick()}>Catch Up</button>
              <div className="attributes-container">
                  <div className="col attributes-content" style={{minWidth: '42%'}}>
                      <p className="cp-text text-center" id="update_type">{props.getListsToDoDetail.types ? props.getListsToDoDetail.types[0].type.name:""}</p>
                      <small className="text-muted">Type</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text" id="update_weight">{props.getListsToDoDetail.weight} Kg</p>
                    <small className="text-muted">Weight</small>
                  </div>
                  <div className="col attributes-content">
                    <p className="cp-text no-border" id="update_height">{props.getListsToDoDetail.height} m</p>
                    <small className="text-muted">Height</small>
                  </div>
              </div>
              <div className="player-data">
                  <div className="col data-container">
                  <p className="stardust" id="update_stardust">{Math.floor((Math.random() * 10000) + 1)}</p>
                  <p className="muted-text">Stardust</p>
                  </div>
                  <div className="col data-container">
                  <p className="stardust" id="update_candy">{Math.floor((Math.random() * 200) + 1)}</p>
                  <p className="muted-text" id="update_candy_title">Pikachu Candy</p>
                  </div>
              </div>
          </div>
      </div>
        </div>
    );
}

export default connect(mapStateToProps, null)(DetailPokemons);
