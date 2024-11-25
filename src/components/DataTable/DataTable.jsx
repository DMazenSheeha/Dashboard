import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatableSource";
import { Link } from "react-router-dom";
import { useState } from "react";
const paginationModel = { page: 0, pageSize: 9 };

function DataTable() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="test" className="link">
              <div className="view-btn">View</div>
            </Link>
            <div
              className="delete-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      <div className="data-table-title">
        Add New User
        <Link className="link" to="/users/new">
          Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        columns={userColumns.concat(actionColumn)}
        rows={data}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[9]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}

export default DataTable;
