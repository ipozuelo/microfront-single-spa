
import {defineCustomElements} from '../loader'

defineCustomElements()

 
import '../src/global/global.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default:'light',
      values: [
        { name: 'black', value: '#000' },
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#ddd' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
