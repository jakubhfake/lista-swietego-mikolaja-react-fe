
import './App.css';
import {GiftsList} from "./components/Gifts/GiftsList";
import {GiftsView} from "./views/GiftsView";
import {LoadingSpinner} from "./components/common/LoadingSpinner/LoadingSpinner";
import {Route, Routes} from "react-router-dom";
import {TestView} from "./views/TestView";

function App() {
  return (
      <Routes>
          <Route path={"/gift"} element={<GiftsView/>}></Route>
          <Route path={"/test"} element={<TestView/>}></Route>
      </Routes>
  );
}

export default App;
