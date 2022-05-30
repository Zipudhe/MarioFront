import styled from 'styled-components'

interface TitleProps {
  mobile: boolean
}

export const StyledTitle = styled.h1<TitleProps>`
  font-size: ${props => props.mobile ? 'var(--mobile-title-font-size)' : 'var(--title-font-size)' };
  font-weight: 700;
`