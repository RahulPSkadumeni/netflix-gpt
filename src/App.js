import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
