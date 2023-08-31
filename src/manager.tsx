import { addons, types } from '@storybook/manager-api'

import { ADDON_ID, PANEL_ID } from './constants'
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
    render: Panel,
    // paramKey: PARAM_KEY,
  })
})
