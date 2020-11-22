import React from "react";
import PropTypes from "prop-types";

const SubmittedForms = ({ data }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <button
          type="button"
          className="btn btn-info btn-sm"
          data-toggle="modal"
          data-target="#myModal"
        >
          Show Submitted Forms
        </button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Submitted Forms</h4>
              </div>
              <div className="modal-body">
                <TableData data={data} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.number.isRequired,
  })
).isRequired;

SubmittedForms.propTypes = {
  data: DataPropTypes,
};

const formData = {
  name: "Name",
  email: "Email Address",
  subject: "Subject",
  message: "message",
};

const TableData = ({ data }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        {Object.keys(formData).map((field) => (
          <th key={`${field}_th`}>{formData[field]}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((record, index) => (
        <tr key={`${index}_tbody`}>
          {Object.keys(formData).map((field) => (
            <td key={`${field}_td`}>{record[field]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

TableData.propTypes = DataPropTypes;

export default SubmittedForms;
