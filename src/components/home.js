import "./overall.css";
// import LogHome from "./logHome";
import StatsHome from "./statsHome";
import React, { Component } from "react";
import { Breadcrumb, Layout, Row, Col, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const menu_items = [
  {
    label: <Link to="/">GSQL Home</Link>,
    key: "stats",
  },
  {
    label: <Link to="/log">Log Home</Link>,
    key: "log",
  },
];

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            height: "50px",
            backgroundColor: "rgb(124, 209, 155)",
          }}
        >
          <Menu
            style={{
              height: "51px",
              backgroundColor: "rgb(124, 209, 155)",
            }}
            // onClick={onClick}
            // selectedKeys={[current]}
            mode="horizontal"
            items={menu_items}
          />
          ;
        </Header>

        <Routes>
          {/* Please change the parent <Route path="/"> to <Route path="*">. */}
          <Route path="/" exact={true} element={<StatsHome></StatsHome>} />
          {/* <Route path="/log" element={<LogHome></LogHome>}></Route> */}
        </Routes>

        <Footer
          style={{
            height: "20px",
          }}
        >
          Stats ©2023 Created by CapitalOne Anomaly Detection Group
        </Footer>
      </Layout>
    );
  }
}

export default Home;
