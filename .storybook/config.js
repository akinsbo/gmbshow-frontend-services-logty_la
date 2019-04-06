import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option theme defaults.
addParameters({
  options: {
    name: 'Logty UI Components',
    theme: themes.dark,
  },
});
configure(loadStories, module);
