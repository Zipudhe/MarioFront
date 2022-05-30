import styled from 'styled-components'

interface TextProps  {
  mobile: boolean,
  bold: boolean
}

export const StyledText = styled.p<TextProps>`
  font-size: ${props => props.mobile ? 'var(--mobile-normal-font-size)' : 'var(--normal-font-size)' };
  line-height: ${props => props.mobile ? 'var(--mobile-line-height)' : 'var(--desktop-line-height)' };
  letter-spacing: ${props => props.mobile ? 'var(--mobile-letter-spacing)' : 'var(--desktop-letter-spacing)'};
  font-weight: ${props => props.bold ? '600' : 'normal' }
`