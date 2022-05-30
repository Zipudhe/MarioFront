import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from './index'

export default {
  title: 'Typograph/Title',
  component: Title,
  argTypes: {
    Screen: {
      options: ['mobile', 'desktop'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}> Sample Text </Title>

export const NormalDesktop = Template.bind({})
NormalDesktop.args = {
  mobile: false
}
NormalDesktop.storyName = 'Default'

export const BoldDesktop = Template.bind({})
BoldDesktop.args = {
  mobile: false
}

export const NormalMobile = Template.bind({})
NormalMobile.args = {
  mobile: true
}

export const BoldMobile = Template.bind({})
BoldMobile.args = {
  mobile: true
}