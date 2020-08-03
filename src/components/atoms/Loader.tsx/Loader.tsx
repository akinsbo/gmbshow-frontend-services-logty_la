import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const variants = ['h1', 'h3', 'body1', 'caption'];

interface LoaderProps {
    loading: boolean,
};

const Loader = (props: LoaderProps) => {
    const { loading } = props;

    return (
        <div>
            {variants.map((variant) => (
                <Typography component="div" key={variant}>
                    {loading ? <Skeleton /> : variant}
                </Typography>
            ))}
        </div>
    );
}

export default Loader