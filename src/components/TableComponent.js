import "../App.css";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    getListsToDo: state.listsToDo.getListsToDo,
    errorListToDo: state.listsToDo.errorListToDo,
    isLoading: state.listsToDo.isLoading,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "name",
      text: "Name Pokemon",
      sort: true,
      // headerStyle: () => {
      //   return { width: "34%" };
      // },
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        // console.log(row.url)
        return (
          // window.location.pathname.split('/')['2'])
          <div>
            <a href={"/" + row.url.split('/')['6']}>
            {/* <Link to={"/" + row.url.split('/')['6']}> */}
            <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
              <svg class="animate-spin  -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Catch UP
            </button>
              {/* <Button color="danger" className="shadow">
                <FontAwesomeIcon icon={faBasketballBall} /> Catch Up
              </Button> */}
            {/* </Link> */}
            </a>
            {/* <Link to={"edit/" + row.id}>
              <Button color="primary" className="m-2 shadow">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="danger"
              className="mr-2 shadow"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button> */}
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "createdAt",
      order: "desc",
    },
  ];

  return (
    <Container className="rounded-xl bg-white shadow p-4">
      {props.getListsToDo ? (
        <>
        <h4>Choose Your Pokemon</h4>
          <BootstrapTable
            wrapperClasses="table-responsive"
            bordered={false}
            bootstrap4
            responsive
            keyField="id"
            striped
            hover
            data={props.getListsToDo}
            columns={columns}
            defaultSorted={defaultSorted}
            pagination={paginationFactory({ sizePerPage: 5 })}
          />
        </>
      ) : (
        <div className="loading mt-6 mb-6  App"><FontAwesomeIcon icon={faSpinner} spin /> Memuat Data</div>
      )}
      {/* <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {(props) => (
          <div>
            <h3>Input something at below input field:</h3>
            
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider> */}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
