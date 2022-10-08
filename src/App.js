import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <div>This is Home</div>,
        },
        {
          path: "/home",
          element: <div>This is real Home</div>,
        },
        {
          path: "/ourteam",
          element: <div>This is Our Team</div>,
        },
        {
          path: "/contact",
          element: <div>This is real contact</div>,
        },
      ],
    },
  ]);
  return (
    <div className="App font-poppins">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
