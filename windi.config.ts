import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'pink-light': 'rgba(235, 104, 84, 0.13)',
        'pink-light-100': 'rgba(235, 104, 84, 0.08)',
      },
    },
  },
  plugins: [],
});
