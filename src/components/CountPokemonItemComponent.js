import {
    faTools
  } from "@fortawesome/free-solid-svg-icons";
import Card from '@material-tailwind/react/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    console.log(state);
  return {
    getListsToDoItem: state.listsToDo.getListsToDoItem,
    errorListToDoDetail: state.listsToDo.errorListToDoDetail,
  };
};

const CountPokemonItem = (props) => {
    return (
        <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color='orange' iconOnly className="mb-0">
                        <FontAwesomeIcon icon={faTools} size="2x"/>
                    </CardHeader>
                    <CardStatus title='Pokemon Item' amount={props.getListsToDoItem.length} />
                </CardRow>

                <CardStatusFooter
                    amount={props.getListsToDoItem.length}
                    color="green"
                    date="Since last month"
                >
                    <FontAwesomeIcon icon='arrow_upward'/>
                </CardStatusFooter>
            </Card>
        </div>
    );
}

export default connect(mapStateToProps, null)(CountPokemonItem);
