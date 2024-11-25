import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/DataTable/DataTable";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;
