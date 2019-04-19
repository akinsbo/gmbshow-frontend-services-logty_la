import { withKnobs } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links';
// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// import { Welcome } from '@storybook/react/demo';
import * as React from 'react'
import MaterialButton from './MaterialButton'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('MaterialButton')} />);


storiesOf('atoms|MaterialButton', module)
  .addDecorator(withKnobs)
  .add('with text', () => <MaterialButton ><h3>Button</h3></MaterialButton>, {
    notes: 'A very simple example of addon notes',
  })
  .add('with some emoji', () =>
    <MaterialButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </MaterialButton>, {
      notes: 'A very simple example of addon notes',
    }
  )