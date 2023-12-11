
import './App.css';
import {GiftsList} from "./components/Gifts/GiftsList";
import {GiftsView} from "./views/GiftsView";
import {LoadingSpinner} from "./components/common/LoadingSpinner/LoadingSpinner";
import {Link, Route, Routes} from "react-router-dom";
import {ChildView} from "./views/ChildView";
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
              <Route path={"/child"} element={<ChildView/>}></Route>
              <Route path={"*"} element={<NotFoundView/>}></Route>
          </Routes>
      </>
  );
}

export default App;
