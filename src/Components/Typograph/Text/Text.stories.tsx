import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from ".";

export default {
  title: 'Typograph/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}> Sample Text </Text>

export const NormalDesktop = Template.bind({})
NormalDesktop.args = {
  bold: false,
  mobile: false
}
NormalDesktop.storyName = 'Default'

export const BoldDesktop = Template.bind({})
BoldDesktop.args = {
  bold: true,
  mobile: false
}

export const NormalMobile = Template.bind({})
NormalMobile.args = {
  bold: false,
  mobile: true
}

export const BoldMobile = Template.bind({})
BoldMobile.args = {
  bold: true,
  mobile: true
}