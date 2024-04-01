import React from "react";
import "./index.css";
import { RiDashboardFill } from "react-icons/ri";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEnvelopePaper } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { Chart } from "react-google-charts";
import { Pie } from 'react-chartjs-2';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      populationData: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((data) => {
        const populationData = data.data.map((item) => [
          item.Year,
          item.Population
        ]);
        this.setState({ populationData, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="homepage">
        <div className="dashboard">
          <div>
            <h1>Board.</h1>
          </div>
          <ul className="dashboard-list">
          <li className="list-item">
              <RiDashboardFill size={20} />
              <p>Dashboard</p>
            </li>
            <li className="list-item">
              <BsTags size={20} />
              <p>Transactions</p>
            </li>
            <li className="list-item">
              <TbCalendarTime size={20} />
              <p>Schedules</p>
            </li>
            <li className="list-item">
              <FaRegCircleUser size={20} />
              <p>Users</p>
            </li>
            <li className="list-item">
              <IoSettingsOutline size={20} />
              <p>Settings</p>
            </li>
          </ul>
          <ul className="help-section">
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="charts-section">
          <div className="nav-bar">
            <h1>Dashboard</h1>
            <div>
              <input type="search" className="search-input" />
              <IoMdNotificationsOutline size={25} className="icon" />
            </div>
          </div>
          <ul className="total-list-container">
          <li className="revenue-list-item">
              <BsEnvelopePaper size={30} className="list-icon" color="black" />
              <p>Total Revenues</p>
              <h3>$2,129,430</h3>
            </li>
            <li className="revenue-list-item transcation">
              <BsTags size={30} className="list-icon" color="black" />
              <p>Total Transactions</p>
              <h3>1,520</h3>
            </li>
            <li className="revenue-list-item likes">
              <AiOutlineLike size={30} className="list-icon" color="black" />
              <p>Total Likes</p>
              <h3>9,721</h3>
            </li>
            <li className="revenue-list-item users">
              <LuUsers2 size={30} className="list-icon" color="black" />
              <p>Total Users</p>
              <h3>892</h3>
            </li>
          </ul>
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <Chart
              width={'98%'}
              height={'300px'}
              chartType="Line"
              className="charts"
              loader={<div>Loading Chart</div>}
              data={[
                ['United States', 'Population'],
                ...this.state.populationData
              ]}
              options={{
                title: 'Population by Country',
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          )}
          <div className="last-container">
              <div className="chart-container">
              <Chart
              width={'100%'}
              height={'300px'}
              chartType="PieChart"
              className="charts"
              loader={<div>Loading Chart</div>}
              data={[
                ['United States', 'Population'],
                ...this.state.populationData
              ]}
              options={{
                title: 'Population in United States',
              }}
              rootProps={{ 'data-testid': '1' }}
            />  
              </div>
              <div className="meeting-schedule-container">
                <div className="schedule-heading">
                  <h1>Today's schedule</h1>
                  <p>See All ></p>
                </div>
                <div className="meeting-list">
                  <h3>Meeting with suppliers from Kuta Bali</h3>
                  <p>14.00- 15.00</p>
                  <p>at Sunset Road, Kuta, Bali</p>
                </div>
                <div className="meeting-list2">
                  <h3>Meeting with suppliers from Kuta Bali</h3>
                  <p>14.00- 15.00</p>
                  <p>at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
