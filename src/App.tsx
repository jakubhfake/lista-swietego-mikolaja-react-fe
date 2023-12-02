
import './App.css';
import {GiftsList} from "./components/Gifts/GiftsList";
import {GiftsView} from "./views/GiftsView";
import {LoadingSpinner} from "./components/common/LoadingSpinner/LoadingSpinner";
import {Link, Route, Routes} from "react-router-dom";
import {TestView} from "./views/TestView";
import React from "react";

function App() {
  return (
      <>
          <h1>Santa Gifts App</h1>
          Menu:
          <Link to={"/gift"}>Gifts</Link> |
          <Link to={"/test"}>Test</Link> |
          <hr/>
          <Routes>
              <Route path={"/gift"} element={<GiftsView/>}></Route>
              <Route path={"/test"} element={<TestView/>}></Route>
          </Routes>
      </>
  );
}

export default App;
