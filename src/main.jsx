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
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Headers from './components/Headers.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

import LoadedUsers from './components/Users.jsx';

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
  },
  {
      path: '/signIn',
      element:<SignIn></SignIn>
  },
  {
    path:'/signUp',
    element:<SignUp></SignUp>
  },
  {
    path:'/headers',
    element:<Headers></Headers>
  },
  {
    path:'/users',
    element: <LoadedUsers></LoadedUsers>,
    loader: ()=> fetch('http://localhost:5000/users')
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
