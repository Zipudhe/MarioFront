import React, { FC } from "react";

import { StyleSubtitle } from './style'

interface SubtitleDeps {
  mobile: boolean
}

export const Subtitle:FC<SubtitleDeps> = ({ children, mobile }) => (
  <StyleSubtitle mobile={mobile} >
    { children }
  </StyleSubtitle>
)

export default Subtitle