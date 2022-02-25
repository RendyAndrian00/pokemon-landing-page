import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
  return {
    getListsToDoDetail: state.listsToDo.getListsToDoDetail,
    errorListToDoDetail: state.listsToDo.errorListToDoDetail,
  };
};

const DetailListComponent = (props) => {
  return (
    <>
      {props.getListsToDoDetail ? (
        <>
          <hr />
          <h6>Personal Identity</h6>
          <Table striped className="mt-3 shadow tbl">
            <tbody>
              <tr>
                <th style={{ width: "15%" }}>Full Name </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.name
                    ? props.getListsToDoDetail.name.firstname
                    : ""}{" "}
                  {props.getListsToDoDetail.name
                    ? props.getListsToDoDetail.name.lastname
                    : ""}
                </td>
              </tr>
              <tr>
                <th>Phone Number </th>
                <td>:</td>
                <td>{props.getListsToDoDetail.phone}</td>
              </tr>
              <tr>
                <th>Email </th>
                <td>:</td>
                <td>{props.getListsToDoDetail.email}</td>
              </tr>
            </tbody>
          </Table>
          <h6 className="mt-4">Address</h6>
          <Table striped className="mt-3 shadow tbl">
            <tbody>
              <tr>
                <th style={{ width: "15%" }}>City </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.city
                    : ""}
                </td>
              </tr>

              <tr>
                <th style={{ width: "15%" }}>Street </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.street
                    : ""}
                </td>
              </tr>
              <tr>
                <th style={{ width: "15%" }}>Number </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.number
                    : ""}
                </td>
              </tr>
              <tr>
                <th style={{ width: "15%" }}>Zipcode </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.zipcode
                    : ""}
                </td>
              </tr>
              <tr>
                <th style={{ width: "15%" }}>Latitude </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.geolocation.lat
                    : ""}
                </td>
              </tr>
              <tr>
                <th style={{ width: "15%" }}>Longitude </th>
                <td style={{ width: "2%" }}>:</td>
                <td>
                  {props.getListsToDoDetail.address
                    ? props.getListsToDoDetail.address.geolocation.long
                    : ""}
                </td>
              </tr>
            </tbody>
          </Table>
          <h6 className="mt-4">Account</h6>
          <Table striped className="mt-3 shadow tbl">
            <tbody>
              <tr>
                <th style={{ width: "15%" }}>Username </th>
                <td style={{ width: "2%" }}>:</td>
                <td>{props.getListsToDoDetail.username}</td>
              </tr>
              {/* <tr>
            <th style={{ width: "15%" }}>Password </th>
            <td style={{ width: "2%" }}>:</td>
            <td>{props.getListsToDoDetail.password}</td>
          </tr> */}
            </tbody>
          </Table>
        </>
      ) : (
        <div className="loading mt-6 mb-6  App"><FontAwesomeIcon icon={faSpinner} spin /> Memuat Data</div>
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(DetailListComponent);
