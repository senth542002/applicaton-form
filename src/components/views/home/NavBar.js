import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router'
import '../../../App.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    margin: theme.spacing(1)
  },
  appBar: {
    //alignItems: 'center',
    fontSize: 400
  },
  typography: {
    flexGrow: 1,
    alignItems: 'center'
  }
}))

export default function NavBar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <ToolBar>
          <Typography variant='h2' color='inherit' className={classes.title}>
            <b>React Student School Application</b>
          </Typography>
          <Button color='inherit' className={classes.button}>
            <Link href='#' className='App-link' to='/'>
              Home
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  )
}
