import React from 'react'

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  DocsContainer,
  Stories
} from '@storybook/addon-docs/blocks'

import { createGlobalStyle } from 'styled-components'

import { GlobalStyle } from '../src/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  //! Docs config
  docs: {
    container: DocsContainer,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
      </>
    )
  }
}

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`

const injectGlobalStyles = Story => (
  <>
    <GlobalStyle />
    <BodyStyle />
    <Story />
  </>
)


const injectRouter = Story => (
  <>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  </>
)

export const decorators = [
  injectGlobalStyles,
  injectRouter
]