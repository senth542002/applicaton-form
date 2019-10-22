import React, { Component } from 'react'
import { Link } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
    width: 300
  },
  input: {
    display: 'none'
  },
  typography: {
    flexGrow: 1,
    fontWeight: 'bold'
  }
}))

export default function HomeForm () {
  const classes = useStyles()
  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Grid container justify='center'>
        <Typography
          component='h1'
          variant='h2'
          className={classes.typography}
          align='center'
        >
          Home Screen
        </Typography>
      </Grid>
      <Grid container justify='center'>
        <Button color='primary' className={classes.button}>
          <Link to='/create'>Create Application</Link>
        </Button>
      </Grid>
      <Grid container justify='center'>
        <Button color='primary' className={classes.button}>
          <Link to='/search'>Search Application</Link>
        </Button>
      </Grid>
    </form>
  )
}
