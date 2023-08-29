import { AddonPanel } from '@storybook/components'
import { addons, types } from '@storybook/manager-api'
import * as React from 'react'

import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants'
import { Panel } from './Panel'

/**
 * @see https://github.com/storybookjs/storybook/blob/next/code/addons/controls/src/manager.tsx
 */
addons.register(ADDON_ID, (api) => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'AF Form',
    match: ({ viewMode }) => viewMode === 'story',
    paramKey: PARAM_KEY,
    render: ({ active }) => {
      if (!active || !api.getCurrentStoryData()) {
        return null
      }
      return (
        <AddonPanel active={active}>
          <Panel />
        </AddonPanel>
      )
    },
  })
})
