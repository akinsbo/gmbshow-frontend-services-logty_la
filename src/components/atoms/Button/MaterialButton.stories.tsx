import { text } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links';
// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// import { Welcome } from '@storybook/react/demo';
import * as React from 'react'
import MaterialButton from './MaterialButton'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('MaterialButton')} />);


storiesOf('atoms|MaterialButton', module)
  .add('with child component and text', () => <MaterialButton ><span>Material Button</span></MaterialButton>, {
    notes: 'Derived from material-ui library',
  })
  .add('with some emoji', () =>
    <MaterialButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </MaterialButton>, {
      notes: 'Derived from material-ui library',
    }
  )
  .add('with text', () => <MaterialButton >{text('title', 'Material Button')}</MaterialButton>, {
    notes: 'Derived from material-ui library',
  })
  .add('no text', () => <MaterialButton />, {
    notes: 'Derived from material-ui library',
  })