# Testing Guide

## What to Test

### It must render

At the very least, make sure the component renders without error. This verifies there are no JSX syntax errors, that all variables are defined, etc. This could be as simple as verifying that the rendered output is not null.

### Test the output

One step above "it renders" is "it renders the correct thing." Given a set of props, what output is expected? Does Person render its name and age, or does it render a name and "TODO: age coming in v2.1"?

### Test the state

Every conditional should be accounted for. If the classNames are conditional (e.g. enabled/disabled, success/warning/error, etc.), make sure to test that the className-deciding logic is working well. Likewise for conditionally-rendered children: if the Logout button is only visible when the user is logged in, for instance, make sure to test for that.

### Test the events

If the component can be interacted with, e.g. an input or button with an onClick or onChange or onAnything, test that the events work as expected and call the specified functions with the correct arguments, including binding this, if it matters.

### Test the edge cases

Anything that operates on an array could have boundary cases — an empty array, an array with 1 element, a paginated list that should truncate at 25 items, and so on. Try out every edge case you can think of, and make sure they all work correctly.

## Testing Scenarios (with react testing library)

Please see this [comprehensive guide]("https://github.com/kentcdodds/react-testing-library-examples") by Kevin Dodds

## Accessibility

Here are the aria roles that help in accessibility
Map {
  '{"name": "article"}' => Set { 'article' },
  '{"name": "button"}' => Set { 'button' },
  '{"name": "td"}' => Set { 'cell', 'gridcell' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "checkbox"}] }' => Set { 'checkbox' },
  '{"name": "th"}' => Set { 'columnheader' },
  '{"name": "select"}' => Set { 'combobox', 'listbox' },
  '{"name": "menuitem"}' => Set { 'command', 'menuitem' },
  '{"name": "dd"}' => Set { 'definition' },
  '{"name": "figure"}' => Set { 'figure' },
  '{"name": "form"}' => Set { 'form' },
  '{"name": "table"}' => Set { 'grid', 'table' },
  '{"name": "fieldset"}' => Set { 'group' },
  '{"name": "h1"}' => Set { 'heading' },
  '{"name": "h2"}' => Set { 'heading' },
  '{"name": "h3"}' => Set { 'heading' },
  '{"name": "h4"}' => Set { 'heading' },
  '{"name": "h5"}' => Set { 'heading' },
  '{"name": "h6"}' => Set { 'heading' },
  '{"name": "img"}' => Set { 'img' },
  '{"name": "a"}' => Set { 'link' },
  '{"name": "link"}' => Set { 'link' },
  '{"name": "ol"}' => Set { 'list' },
  '{"name": "ul"}' => Set { 'list' },
  '{"name": "li"}' => Set { 'listitem' },
  '{"name": "nav"}' => Set { 'navigation' },
  '{"name": "option"}' => Set { 'option' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "radio"}] }' => Set { 'radio' },
  '{"name": "frame"}' => Set { 'region' },
  '{"name": "rel"}' => Set { 'roletype' },
  '{"name": "tr"}' => Set { 'row' },
  '{"name": "tbody"}' => Set { 'rowgroup' },
  '{"name": "tfoot"}' => Set { 'rowgroup' },
  '{"name": "thead"}' => Set { 'rowgroup' },
  '{"name": "th", "attributes": [ {"name": "scope", "value": "row"}] }' => Set { 'rowheader' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "search"}] }' => Set { 'searchbox' },
  '{"name": "hr"}' => Set { 'separator' },
  '{"name": "dt"}' => Set { 'term' },
  '{"name": "dfn"}' => Set { 'term' },
  '{"name": "textarea"}' => Set { 'textbox' },
  '{"name": "input", "attributes": [ {"name": "type", "value": "text"}] }' => Set { 'textbox' }
}
