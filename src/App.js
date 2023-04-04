import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./utils/history";



function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
        {/* 路由入口 */}
        <Routes>
          {/* <Route path="/" exact={true}  element={<EnterRoom />} /> */}
          <Route path="/*" exact={true} element={<Home />} />
          {/* <Route path="/stats" element={<StatsHome />}></Route>
          <Route path="/log" element={<LogHome></LogHome>}></Route> */}
        </Routes>

      </HistoryRouter>
    </div>
  );
}

export default App;
