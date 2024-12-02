import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/updateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>

  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
