import React, { FC } from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: 'green',
    padding: '3px 50px',
  },
  typoStyle: {
    color: 'blue',
  },
  papperStyle: {
    background: 'orange',
    height: '50px',
  },
})

export const MaterialUI: FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        Hello UIHello UIHello UIHello UIHello UIHello UIHello UIHello UIHello
        UIHello UIHello UIHello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.papperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.papperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.papperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.papperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.papperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.papperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.papperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        TEST BUTTON
      </Button>
    </div>
  )
}
