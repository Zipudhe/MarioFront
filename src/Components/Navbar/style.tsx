import styled from "styled-components"
import { Link as Ln } from "react-router-dom"

export const Nav = styled.nav`
  width: 100vw;
  min-height: 10vh;
  max-height: 65px;
  min-width: 100vw;
`

export const IconDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: "#000";
`

export const LinksDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const CartDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: "blue";
`

export const Link = styled(Ln)`
  text-decoration: none;
  font-size: var(--normal-font-size);
`