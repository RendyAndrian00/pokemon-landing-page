import "../App.css";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getListsToDoItem: state.listsToDo.getListsToDoItem,
    errorListToDo: state.listsToDo.errorListToDo,
    isLoading: state.listsToDo.isLoading,
  };
};

const handleClick = (dispatch, id) => {
  swal("Warning", "Sorry, Under Maintenance", "warning");
};


const TableItemComponent = (props) => {
    console.log(props);
  const columns = [
    {
      dataField: "name",
      text: "Name Item",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
              <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"  onClick={() => handleClick()}>
                  <FontAwesomeIcon icon={faCheck} className="pr-3"/>
                  Show List
                </button>
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
      {props.getListsToDoItem ? (
        <>
          <BootstrapTable
            wrapperClasses="table-responsive"
            bordered={false}
            bootstrap4
            responsive
            keyField="id"
            striped
            hover
            data={props.getListsToDoItem}
            columns={columns}
            defaultSorted={defaultSorted}
            pagination={paginationFactory({ sizePerPage: 2 })}
          />
        </>
      ) : (
        <div className="loading mt-6 mb-6  App"><FontAwesomeIcon icon={faSpinner} spin /> Memuat Data</div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableItemComponent);
