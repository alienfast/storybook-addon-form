import { addons, types } from 'storybook/manager-api'

import { ADDON_ID, PANEL_ID } from './constants.js'
import { Panel } from './Panel.js'

/**
 * @see https://github.com/storybookjs/storybook/blob/next/code/addons/controls/src/manager.tsx
 */
addons.register(ADDON_ID, (api) => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Form',
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel,
    // paramKey: PARAM_KEY,
  })
})
