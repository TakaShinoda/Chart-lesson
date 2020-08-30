import React, { FC } from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: 'green',
    padding: '3px 50px',
  },
  typoStyle: {
    color: 'blue',
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
      <Button className={classes.btnStyle} variant="contained" color="primary">
        TEST BUTTON
      </Button>
    </div>
  )
}
