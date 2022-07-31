import { useAddonState, useChannel } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import { STORY_CHANGED } from '@storybook/core-events'
import * as React from 'react'

import { PanelContent } from './components/PanelContent'
import { ADDON_ID, EVENTS } from './constants'

interface PanelProps {
  active: boolean
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, {
    danger: [],
    warning: [],
  })

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    [EVENTS.RESULT]: (newResults) => setState(newResults),
    [STORY_CHANGED]: () => {
      // eslint-disable-next-line no-console
      console.log('panel story changed')
    },
  })

  return (
    <AddonPanel {...props}>
      <PanelContent
        results={results}
        fetchData={() => {
          emit(EVENTS.REQUEST)
        }}
        clearData={() => {
          emit(EVENTS.CLEAR)
        }}
      />
    </AddonPanel>
  )
}
