import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from './Loader'

const LoaderContainer = (props: { loading: boolean }) =>
    <Grid container spacing={8}>
        <Grid item xs>
            <Loader loading={props.loading} />
        </Grid>
        <Grid item xs>
            <Loader loading={props.loading} />
        </Grid>
    </Grid>

export default  LoaderContainer