import { addons } from '@storybook/addons'

import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Collagerie Pattern Library',
    brandUrl: 'https://www.collagerie.com',
  }),
})
