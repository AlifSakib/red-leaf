import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Root from "./Layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      loader: () =>
        fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=014c053402364c349f8036b0053329f7"
        ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
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
