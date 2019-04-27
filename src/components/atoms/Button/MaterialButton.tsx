import Button from '@material-ui/core/Button';
import * as React from 'react'

// Uncomment if you wish to use interface for typing
interface LabelProps {
    children?: JSX.Element[] | JSX.Element | string | string[]
}

const MaterialButton = (props: LabelProps) => {
    return <Button>{props.children}</Button>
}

export default MaterialButton