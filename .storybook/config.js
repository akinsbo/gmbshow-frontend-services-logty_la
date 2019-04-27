import { addParameters, addDecorator, configure } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';


// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option theme defaults.
addParameters({
  options: {
    name: 'Logty UI Components',
    theme: themes.dark, //alternatively replace with themes.light
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
  viewport: { defaultViewport: 'iphone6' }
});


addDecorator(withA11y)
addDecorator(withKnobs)
// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: false,
  })
);

configure(loadStories, module);
