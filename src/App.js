import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Body from "./components/Body";
import Browse from "./components/Browse";

import Login from "./components/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
