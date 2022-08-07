import { useAddonState, useChannel } from '@storybook/api'
import { AddonPanel, Placeholder, TabsState } from '@storybook/components'
import { STORY_CHANGED } from '@storybook/core-events'
import { convert, themes } from '@storybook/theming'
import { FormState } from 'final-form'
import * as React from 'react'

import { ADDON_ID, EVENTS } from './constants'
import { DisplayJson } from './DisplayJson'

interface PanelProps {
  active: boolean
}

export interface Results<FormValues = any> {
  errors: FormState<FormValues>['errors']
  id?: string
  values: FormState<FormValues>['values']
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState<Results>(ADDON_ID, {
    errors: {},
    values: {},
  })

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    [EVENTS.RESULT]: (newResults) => setState(newResults),
    [STORY_CHANGED]: (...args) => {
      // eslint-disable-next-line no-console
      console.log('panel story changed')
    },
  })

  const { errors, id, values } = results
  const info = id ? ` (${id})` : ''
  return (
    <AddonPanel {...props}>
      <TabsState initial="values" backgroundColor={convert(themes.normal).background.hoverable}>
        <div id="values" title="Values" color={convert(themes.normal).color.secondary}>
          <Placeholder>
            <>{info}</>
            <>
              <DisplayJson o={values || {}} />
            </>
          </Placeholder>
        </div>
        <div id="errors" title={`Errors`} color={convert(themes.normal).color.negative}>
          <Placeholder>
            <>{info}</>
            <>
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
    </AddonPanel>
  )
}
