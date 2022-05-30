import React, { FC } from 'react'

import { StyledTitle } from './style'

interface TitleDeps {
  mobile: boolean
}

export const Title: FC<TitleDeps> = ({ children, mobile = false }) => (
  <StyledTitle mobile={mobile} >
    { children }
  </StyledTitle>
)

export default Title