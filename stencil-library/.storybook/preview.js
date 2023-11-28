
import {defineCustomElements} from '../loader'

defineCustomElements()

 
import '../src/global/global.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default:'light',
      values: [
        { name: 'light', value: '#fffffe' },
        { name: 'dark', value: '#16161a' },
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
