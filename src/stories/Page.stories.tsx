import * as React from 'react'

import * as HeaderStories from './Header.stories'
import { Page, PageProps } from './Page'

export default {
  title: 'Example/Page',
  component: Page,
}

const Template = (args: PageProps) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
