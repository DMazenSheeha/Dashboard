import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-btn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto-compress&cs=tiny"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+1 2345 67 89</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Single;
