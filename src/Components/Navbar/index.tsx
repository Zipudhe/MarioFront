import React, { FC } from "react"

import { 
  Nav,
  IconDiv,
  LinksDiv,
  CartDiv,
  Link
} from "./style"

export const NavBar: FC = () => {


  return (
    <Nav>
      <IconDiv />
      <LinksDiv>
        <Link to="/"> Link 1 </Link>
        <Link to="/"> Link 2 </Link>
        <Link to="/"> Link 3 </Link>
        <Link to="/"> Link 4 </Link>
      </LinksDiv>
      <CartDiv />
    </Nav>
  )
}

export default NavBar