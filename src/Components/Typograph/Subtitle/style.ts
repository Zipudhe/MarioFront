import styled from 'styled-components'

interface SubtitleDeps {
  mobile: boolean
}

export const StyleSubtitle = styled.p<SubtitleDeps>`
  font-size: ${props => props.mobile ? 'var(--mobile-legenda-font-size)' : 'var(--legenda-font-size)'};
  font-weight: 700;

  max-width: 100%;
`