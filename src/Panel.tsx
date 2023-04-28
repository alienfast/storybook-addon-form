import { Placeholder, TabsState } from '@storybook/components'
import { STORY_CHANGED } from '@storybook/core-events'
import { useAddonState, useChannel } from '@storybook/manager-api'
import { convert, themes } from '@storybook/theming'
import * as React from 'react'

import { ADDON_ID, EVENTS, Results } from './constants'
import { DisplayJson } from './DisplayJson'

interface PanelProps {}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setResults] = useAddonState<Results>(ADDON_ID, {
    errors: {},
    values: {},
  })

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => {
      // console.log('RESULT event: ', newResults)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setResults(newResults)
    },
    [STORY_CHANGED]: () => {
      // console.log('panel story changed')
      emit(EVENTS.RESULT, {
        errors: {},
        values: {},
      })
    },
  })

  const { errors, id, values } = results
  const info = id ? ` (${id})` : ''
  // console.log('render', errors, values)
  return (
    <TabsState initial="values" backgroundColor={convert(themes.normal).background.hoverable}>
      <div id="values" title="Values" color={convert(themes.normal).color.secondary}>
        <Placeholder>
          <>{info}</>
          <>
            {/* {String(values)} */}
            <DisplayJson o={values || {}} />
          </>
        </Placeholder>
      </div>
      <div id="errors" title={`Errors`} color={convert(themes.normal).color.negative}>
        <Placeholder>
          <>{info}</>
          <>
            {/* {String(errors)} */}
            <DisplayJson o={errors || {}} />
          </>
        </Placeholder>
      </div>
      {/* <div
          id="warning"
          title={`${results.warning.length} Warning`}
          color={convert(themes.normal).color.warning}
        >
          <List items={results.warning} />
        </div> */}
    </TabsState>
  )
}
