import { addons, types } from '@storybook/addons'
import { API } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import * as React from 'react'

import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants'
import { Panel } from './Panel'

/**
 * @see https://github.com/storybookjs/storybook/blob/next/code/addons/controls/src/manager.tsx
 */
addons.register(ADDON_ID, (api: API) => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'AF Form',
    match: ({ viewMode }) => viewMode === 'story',
    paramKey: PARAM_KEY,
    render: ({ key, active }) => {
      if (!active || !api.getCurrentStoryData()) {
        return null
      }
      return (
        <AddonPanel key={key} active={active}>
          <Panel />
        </AddonPanel>
      )
    },
  })
})
