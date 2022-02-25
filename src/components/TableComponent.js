import "../App.css";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
// import {Search} from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteTodoList } from "../action/listToDoAction";


// const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah anda yakin ? ",
    text: "Data Akan Terhapus Dari Database",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteTodoList(id));
      swal("Berhasil Data Terhapus", {
        icon: "success",
      });
    } else {
      swal("Gagal Data Tidak Terhapus");
    }
  });
};
const mapStateToProps = (state) => {
  return {
    getListsToDo: state.listsToDo.getListsToDo,
    errorListToDo: state.listsToDo.errorListToDo,
    isLoading: state.listsToDo.isLoading,
  };
};

const TableComponent = (props) => {
  // console.log(props.isLoading);
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
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="primary" className="shadow">
                <FontAwesomeIcon icon={faUser} /> Detail
              </Button>
            </Link>
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
