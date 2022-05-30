import React, { FC } from 'react'
import { StyledText } from './style'

export interface TextDeps {
  mobile: boolean,
  bold: boolean
}

export const Text: FC<TextDeps> = ({ children, mobile = false, bold = false }) => (
  <StyledText mobile={mobile} bold={bold} >
    { children }
  </StyledText>
)

export default Text