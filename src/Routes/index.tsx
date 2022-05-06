import { BrowserRouter as RouterDom } from "react-router-dom"
import Home from "./Home"

export const Router = () => {
  return (
    <RouterDom>
      <Home />
    </RouterDom>
  )
}

export default Router