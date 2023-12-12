
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Route, Routes} from "react-router-dom";
import {ChildrenView} from "./views/ChildrenView";
import React from "react";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";

function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path={"/gift"} element={<GiftsView/>}></Route>
              <Route path={"/gift/:giftId"} element={<SingleGiftView/>}></Route>
              <Route path={"/child"} element={<ChildrenView/>}></Route>
              <Route path={"*"} element={<NotFoundView/>}></Route>
          </Routes>
      </>
  );
}

export default App;
