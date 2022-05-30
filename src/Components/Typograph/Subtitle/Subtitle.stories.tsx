import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Subtitle from ".";

export default {
  title: 'Typograph/Subtitle',
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args}> Sample Subtitle </Subtitle>

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