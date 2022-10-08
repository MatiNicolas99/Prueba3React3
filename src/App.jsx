import { BrowserRouter } from "react-router-dom"
import "./app.css"
import { NavBar } from "./Components/NavBar"
import { Pages } from "./Pages/Pages"
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
   return (
   <>
   <BrowserRouter>
      <NavBar/>
      <Pages/>
    </BrowserRouter>
   </>
  )
}

