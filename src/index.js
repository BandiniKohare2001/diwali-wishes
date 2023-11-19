import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<RouterProvider router = {router} />
)
