import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Root from "./Layout/Root";
import OurTeam from "./OurTeam/OurTeam";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      loader: () =>
        fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2022-09-08&sortBy=publishedAt&apiKey=014c053402364c349f8036b0053329f7"
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
          loader: () => fetch("team-member.json"),
          element: <OurTeam></OurTeam>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
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
