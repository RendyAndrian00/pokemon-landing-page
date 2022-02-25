import React from "react";
import { Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    title : state.listsToDo.title
  }
}

const JumbotronComponent = (props) => {
  return (
    <div className="text-white" style={{backgroundColor:"#03a9f4"}}>
      <Container className="p-3 pt-5 pb-5">
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="dark"><FontAwesomeIcon icon={faInfo} /> Learn More</Button>
        </p>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps,null)(JumbotronComponent);
