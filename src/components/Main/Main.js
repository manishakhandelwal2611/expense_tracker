import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Grid } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from './../../context/context';
import InfoCard from './../InfoCard';

function Main() {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography variant="h5" align="center">Total Balance {balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }} align="center">
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
