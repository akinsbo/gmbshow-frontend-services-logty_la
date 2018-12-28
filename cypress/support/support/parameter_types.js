import { defineParameterType } from "cucumber"

defineParameterType({
  regexp: /(\w+)page/,
  name: "webpage"
})

defineParameterType({
  regexp: /(\w+)$/,
  name: "component"
})

defineParameterType({
  regexp: /(\w+)s$/,
  name: "components"
})
