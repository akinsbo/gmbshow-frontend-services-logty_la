import * as React from 'react'

// Uncomment if you wish to use interface for typing
// interface LabelProps {
//     children: JSX.Element[] | JSX.Element
// }

const Label = (props: {children: JSX.Element[] | JSX.Element}) => {
    return <label>{props.children}</label>
}

export default Label