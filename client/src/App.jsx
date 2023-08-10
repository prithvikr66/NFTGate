import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import './App.css'
import Home from "./components/Home"
import Members from "./components/Members"
import Wallet from "./components/Wallet"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: (<Home />) },
    // { path: "/Home", element: (<Home />) },
    { path: "/Members", element: (<Members />) },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
