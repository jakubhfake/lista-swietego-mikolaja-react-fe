
import './App.css';
import {GiftsList} from "./components/Gifts/GiftsList";
import {GiftsView} from "./views/GiftsView";
import {LoadingSpinner} from "./components/common/LoadingSpinner/LoadingSpinner";

function App() {
  return (
      <>
          <div className="App">
                <GiftsView/>
          </div>
      </>
  );
}

export default App;
