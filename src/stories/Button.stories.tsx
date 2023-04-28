import { addons } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { EVENTS } from '../constants'
import { Button } from './Button'

const channel = addons.getChannel()

const meta: Meta<typeof Button> = {
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

export default meta
type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: 'Button',
    onClick,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    onClick,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    onClick,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    onClick,
  },
}

// const Template: StoryFn<ButtonProps> = (args) => <Button onClick={onClick} {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
