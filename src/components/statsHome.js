// import { getAllStats } from "../api/api.js";
import React, { Component } from "react";
import { Breadcrumb, Layout, Row, Col } from "antd";
import { Card, Space, Divider, Statistic } from "antd";
import { Input } from "antd";
import TimeComponent from "./timeComponent";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
const { TextArea } = Input;
// import ReactEcharts from "echarts-for-react";
const { Header, Content, Footer } = Layout;

class StatsHome extends Component {
  // totalUsage = 112893;
  // todayUsage = 200;
  // handwrittenInputNum = 100;
  // printedInputNum = 200;
  // confidenceBT95 = 20;
  // confidenceLT95 = 10;

  constructor() {
    super();
    this.state = {
      totalUsage: 0,
      todayUsage: 0,
      handwrittenInputNum: 0,
      printedInputNum: 0,
      confidenceBT95: 0,
      confidenceLT95: 0,
    };
  }

  //在页面加载完的时候设置一个定时器
  //referenced from https://blog.csdn.net/qq_41514865/article/details/103333935?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-103333935-blog-118310071.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-103333935-blog-118310071.pc_relevant_aa&utm_relevant_index=8
  componentDidMount() {
    // 必须 this
    // this.getAllStats();
    // this.interval = setInterval(() => this.getAllStats(), 5000);
  }

  //组件销毁的时候清除定时器就行
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // getAllStats = () => {
  //   // console.log(1)

  //   getAllStats().then((res) => {
  //     console.log(res);
  //     this.setState(res.data);
  //     // this.totalUsage = res.totalUsage;
  //     // this.confidenceBT95 = res.confidenceBT95;
  //     // this.confidenceLT95 = res.confidenceLT95;
  //     // this.handwrittenInputNum = res.handwrittenInputNum;
  //     // this.printedInputNum = res.printedInputNum;
  //   });
  // };

  getOption = () => {
    //referenced from https://blog.csdn.net/m0_47531829/article/details/123827555
    let option = {
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "confidence stats",
          type: "pie",
          //   width: 200,
          //   height: 200,
          //   top: 8,
          //   left: "center",
          data: [
            {
              value: this.state.confidenceBT95,
              name: "confidence bigger than 95%",
              label: {
                show: true,
                formatter: String(">95%"),
                color: "#fff",
              },
              itemStyle: { color: "rgb(124, 209, 155)" },
            },
            {
              value: this.state.confidenceLT95,
              name: "confidence less than 95%",
              label: {
                show: true,
                formatter: String("<95%"),
                color: "#fff",
              },
              itemStyle: { color: "#607CE9" },
            },
          ],
          clockwise: false, //是否顺时针
          label: {
            normal: {
              //   show: false,
              position: "inside",
              //   formatter: "{b}:{d}%",
            },
          },
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <Content
        className="statsContent"
        style={{
          padding: "0 400px",
        }}
      >
        <Space
          direction="vertical"
          size="small"
          style={{ display: "flex", padding: 15 }}
        >
          {/* <Divider orientation="left">Stats</Divider> */}
          <TimeComponent></TimeComponent>
          <Card className="general-card" title="HSQL Input" size="small">
            <TextArea
              placeholder="Please enter your HSQL"
              style={{
                minHeight : "15em"
              }}
            ></TextArea>
          </Card>
          <Card className="general-card" title="Query Results" size="small">
            <Row gutter={14}>
              <Col span={12}>
                <Statistic title="Text Result" value="..." />
              </Col>
              <Col span={12}>
                <Statistic title="Graph Result" value="..." />
              </Col>
            </Row>
          </Card>
        </Space>
      </Content>
    );
  }
}
export default StatsHome;
