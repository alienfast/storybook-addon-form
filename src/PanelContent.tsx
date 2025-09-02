/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react'
import { TabsState } from 'storybook/internal/components'
import { convert, themes } from 'storybook/theming'

import { Results } from './constants.js'
import { DisplayJson } from './DisplayJson.js'

interface PanelProps {
  results?: Results
}

export const PanelContent: React.FC<PanelProps> = (props: PanelProps) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  // const [results, setResults] = useAddonState<Results | undefined>(ADDON_ID, undefined)
  //
  const { id, state } = props.results || {}
  const { errors, initialValues, values, ...restState } = state || {}

  // const info = id ? ` (${id})` : ''

  // console.log(
  //   'render',
  //   'id:',
  //   id,
  //   'errors:',
  //   errors,
  //   'initialValues:',
  //   initialValues,
  //   'values:',
  //   values,
  //   'restState:',
  //   restState,
  // )

  // rerender bug with TabsState so hack in a key https://github.com/storybookjs/storybook/issues/25308
  // this hack refocuses on values tab, but it's better than the alternative
  const key = String(new Date().getTime())
  return (
    <>
      {/* <div>{info}</div> */}

      <TabsState
        initial="values"
        backgroundColor={convert(themes.normal).background.hoverable}
        key={key}
      >
        <div id="values" title="Values" color={convert(themes.normal).color.secondary}>
          <DisplayJson o={values || {}} />
        </div>
        <div id="errors" title="Errors" color={convert(themes.normal).color.negative}>
          <DisplayJson o={errors || {}} />
        </div>
        <div
          id="initialValues"
          title="Initial Values"
          color={convert(themes.normal).color.secondary}
        >
          <DisplayJson o={initialValues || {}} />
        </div>
        <div id="state" title="Other state" color={convert(themes.normal).color.secondary}>
          <DisplayJson o={restState || {}} />
        </div>
      </TabsState>
    </>
  )
}
