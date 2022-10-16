import addons from '@storybook/addons'
import * as React from 'react'

import { EVENTS } from '../constants'
import { Button, ButtonProps } from './Button'

const channel = addons.getChannel()

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    myAddonParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
}

const onClick = () => {
  const results = { errors: {}, id: 'MyFormId', values: { foo: 'bar', hello: 'world' } }
  // eslint-disable-next-line no-console
  console.clear()
  // eslint-disable-next-line no-console
  console.log('emitting', results)
  // send the results to the channel.
  channel.emit(EVENTS.RESULT, results)
}

const Template = (args: ButtonProps) => <Button onClick={onClick} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
