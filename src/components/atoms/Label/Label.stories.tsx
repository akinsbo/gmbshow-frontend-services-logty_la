import { withKnobs } from '@storybook/addon-knobs'
// import { notes } from '@storybook/addon-notes'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Label from './Label'
// import Button from '@material-ui/core/Button';


storiesOf('atoms|Label', module)
  .addDecorator(withKnobs)
  // .add('with text', () => <Button/>, { notes: 'Simple label component' })
  .add('with some emoji', () => 
    <Label>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Label>, {
    notes: 'This is the notes for a button. This is helpful for adding details about a story in a separate panel.',
    }
  )