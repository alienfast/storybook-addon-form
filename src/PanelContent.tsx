import { Placeholder, TabsState } from '@storybook/components'
import { convert, themes } from '@storybook/theming'
import * as React from 'react'

import { Results } from './constants'
import { DisplayJson } from './DisplayJson'

interface PanelProps {
  results?: Results
}

export const PanelContent: React.FC<PanelProps> = (props: PanelProps) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  // const [results, setResults] = useAddonState<Results | undefined>(ADDON_ID, undefined)
  //
  const { id, state } = props.results || {}
  const { errors, initialValues, values, ...restState } = state || {}

  const info = id ? ` (${id})` : ''
  console.log(
    'render',
    'id:',
    id,
    'errors:',
    errors,
    'initialValues:',
    initialValues,
    'values:',
    values,
    'restState:',
    restState,
  )
  return (
    <>
      <div>
        hack 1<div>raw: {String(values)}</div>
        <DisplayJson o={values || {}} />
      </div>

      <TabsState initial="values" backgroundColor={convert(themes.normal).background.hoverable}>
        <div id="values" title="Values" color={convert(themes.normal).color.secondary}>
          {({ active, selected }: { active: boolean; selected: string }) =>
            active ? (
              <div>
                <div>{selected} is selected</div>
                <div>
                  hack 2<div>raw: {String(values)}</div>
                  <DisplayJson o={values || {}} />
                </div>
              </div>
            ) : (
              <div>not selected</div>
            )
          }
          <div>
            hack 2<div>raw: {String(values)}</div>
            <DisplayJson o={values || {}} />
          </div>
          <Placeholder>
            <>{info}</>
            <DisplayJson o={values || {}} />
          </Placeholder>
        </div>
        <div id="errors" title={`Errors`} color={convert(themes.normal).color.negative}>
          <Placeholder>
            <>{info}</>
            <DisplayJson o={errors || {}} />
          </Placeholder>
        </div>
        <div
          id="initialValues"
          title="Initial Values"
          color={convert(themes.normal).color.secondary}
        >
          <Placeholder>
            <>{info}</>
            <DisplayJson o={initialValues || {}} />
          </Placeholder>
        </div>
        <div id="state" title="State" color={convert(themes.normal).color.secondary}>
          <Placeholder>
            <>Rest of form state{info}</>
            <DisplayJson o={restState || {}} />
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
    </>
  )
}
