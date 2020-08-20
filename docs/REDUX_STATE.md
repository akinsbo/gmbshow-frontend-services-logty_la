# Redux_State

Please see the diagrams Redux State.gif and Redux Files View.jpeg excerpt from
("https://medium.com/@rishabhtrivedi_39085/react-ssr-redux-code-splitting-webpack-4-xx-react-router-v4-scss-pwa-8a0c8951c1cf")

The following steps are involved:

- The View generates an `Event` to call Actions

- Actions generate `Actions` to call the Dispatcher which may host Middleware

- The Middleware makes `request` to the API and dispatches Action to the Reducer to build a new state.

- The Reducer gets the state from the state store and applies an action to it. It returns a `new state` which the Reducer uses to update the store

- The API `response` triggers the Middlewaware, and the previous step is repeated
