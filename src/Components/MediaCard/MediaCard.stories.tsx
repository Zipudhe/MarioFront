import React from 'react'

import MediaCard from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/MediaCard',
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>

const url = 'https://images.unsplash.com/photo-1582193479734-31c66705bd78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit. Quam quisque id diam vel quam elementum pulvinar etiam non.'

const Template: ComponentStory<typeof MediaCard> = () => <MediaCard url={url}  description={description} />

export const Primary = Template.bind({})

