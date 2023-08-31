import { AddonPanel } from '@storybook/components'
import { STORY_CHANGED } from '@storybook/core-events'
import { useAddonState, useChannel } from '@storybook/manager-api'
import React from 'react'

import { ADDON_ID, EVENTS, Results } from './constants'
import { PanelContent } from './PanelContent'

interface PanelProps {
  active: boolean
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setResults] = useAddonState<Results | undefined>(ADDON_ID, undefined)

  // // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  // const emit = useChannel({
  //   [EVENTS.RESULT]: (newResults) => setResults(newResults),
  // })
  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => {
      console.log('RESULT event calling setResult: ', newResults)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setResults(newResults as any)
    },
    [STORY_CHANGED]: () => {
      console.log('panel story changed')
      emit(EVENTS.RESULT, undefined)
    },
  })

  return (
    <AddonPanel {...props}>
      <PanelContent results={results} />
    </AddonPanel>
  )
}
