import React from 'react'

import MediaCard, { MediaCardProps } from "../MediaCard";
import Footer from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const url = 'https://images.unsplash.com/photo-1582193479734-31c66705bd78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const icon = 'https://cdn-icons-png.flaticon.com/512/16/16410.png'

const Media = { url, description }
const MediaCards = [Media, Media, Media]


const Template: ComponentStory<typeof Footer> = () => <Footer Media={MediaCards} IconUrl={icon} />

export const Primary = Template.bind({})

