import React, { FC } from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: 'green',
    padding: '3px 50px',
  },
})

export const MaterialUI: FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        TEST BUTTON
      </Button>
    </div>
  )
}
