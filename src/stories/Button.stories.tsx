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

let counter = 0

const onClick = () => {
  const results = {
    id: 'MyFormId',
    state: {
      errors: { bar: `baz-${++counter}` },
      values: { foo: `bar-${++counter}`, hello: `world-${++counter}` },
      initialValues: { foo: `bar-0`, hello: `world-0` },
      // rest state
      dirtyFields: {
        foo: `bar-${++counter}`,
        hello: `world-${++counter}`,
      },
    },
  }
  // eslint-disable-next-line no-console
  console.clear()
  // eslint-disable-next-line no-console
  console.log(
    'emitting',
    results,
    'with values',
    results.state.values,
    'with errors',
    results.state.errors,
    'with initialValues',
    results.state.initialValues,
  )
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
    label: `Button ${counter}`,
    onClick,
  },
}

export const Secondary: Story = {
  args: {
    label: `Button ${counter}`,
    onClick,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: `Button ${counter}`,
    onClick,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: `Button ${counter}`,
    onClick,
  },
}

// const Template: StoryFn<ButtonProps> = (args) => <Button onClick={onClick} {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: `Button ${counter}`,
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: `Button ${counter}`,
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: `Button ${counter}`,
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: `Button ${counter}`,
// }
