import { Link, Route, Routes } from "react-router-dom";
import Insert from "./component/Insert";
import List from "./component/List";
import View from "./component/View";
import Modify from "./component/Modify";
import Delete from "./component/Delete";
import "./main.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>
            <Link to="/">React-Test2</Link>
          </h1>
        </div>
        <div className="nav">
          <h3>
            <Link to="/memberList">1. 전체 회원 조회</Link>
          </h3>
          <h3>
            <Link to="/insert">2. 회원 정보 등록</Link>
          </h3>
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/insert" element={<Insert />}></Route>
          <Route path="/memberList" element={<List />}></Route>
          <Route path="/view/:memberId" element={<View />}></Route>
          <Route path="/modify/:memberId" element={<Modify />}></Route>
          <Route path="/delete/:memberId" element={<Delete />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
