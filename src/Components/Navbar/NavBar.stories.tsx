
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './index';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  /*π The args you need here will depend on your component */
};
