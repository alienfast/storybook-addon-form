import type { FormState } from 'final-form'

export interface Results<FormValues = any> {
  state: FormState<FormValues>
  id?: string
}

export const ADDON_ID = 'alienfast-storybook-addon-form' as const
export const PANEL_ID = `${ADDON_ID}/panel` as const
// export const PARAM_KEY = '@alienfast-form' as const

export const EVENTS = {
  RESULT: `${ADDON_ID}/result`,
}
