import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import AddUsers from "./components/AddUsers/AddUsers";
import UpdateUser from "./components/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: () =>fetch("http://localhost:7000/users")
  },
  {
    path: "/users/:id",
    element: <UpdateUser/>,
    loader: ({params}) =>fetch(`http://localhost:7000/users/${params.id}`)
  },
  {
    path: "/add",
    element: <AddUsers/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
