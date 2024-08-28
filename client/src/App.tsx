import './assets/styles/App.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/appRoads.tsx";

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
