import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Publications from "./Publications";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function PublicationsWrapper() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={0} justify='center'>
            <Grid item style={{width: '80%', height: 400, paddingBottom: 30}}>
                <Publications/>
            </Grid>
        </Grid>
    );
}