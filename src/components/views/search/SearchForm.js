import React, { Component } from 'react'
import { Link } from 'react-router'
import applicationFormAPI from '../../api/ApplicationFormApi'
import SearchResults from './SearchResults.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 30
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 325,
    fontSize: 24
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    display: 'none'
  },
  typography: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
  resize: {
    fontSize: 25
  },
  grid: {
    width: '60%'
  }
}))

export default function SearchForm () {
  const classes = useStyles()

  const [applicationNumber, setApplicationNumber] = React.useState(0)
  const [mobileNumber, setMobileNumber] = React.useState('')

  const [student, setStudent] = React.useState([])

  const handleChange = value => event => {
    setApplicationNumber(event.target.value)
  }

  const submitFormHandler = event => {
    event.preventDefault()
    applicationFormAPI
      .get('api/applications/' + applicationNumber)
      .then(res => {
        console.log('Res:' + res.data.data)
        setStudent(res.data.data)
      })
      .catch(error => {
        console.log('Error:' + error)
      })
  }

  return (
    <div>
      <form className={classes.container} noValidate autoComplete='off'>
        <Grid container justify='center'>
          <Typography
            component='h1'
            variant='h2'
            className={classes.typography}
            align='center'
          >
            Search Application Form
          </Typography>
        </Grid>
        <Grid container justify='center'>
          <TextField
            id='name'
            label='Application Number'
            name='applicationNumber'
            className={classes.textField}
            value={applicationNumber}
            InputProps={{ classes: { input: classes.textField } }}
            InputLabelProps={{ classes: { root: classes.textField } }}
            FormHelperTextProps={{ classes: { root: classes.textField } }}
            onChange={handleChange('applicationNumber')}
            margin='normal'
          />
        </Grid>
        <Grid container justify='center'>
          <Button
            color='primary'
            className={classes.button}
            onClick={submitFormHandler}
          >
            Search
          </Button>
        </Grid>
        <Grid container justify='center'>
          <Typography
            component='h1'
            variant='h2'
            className={classes.typography}
            align='center'
          >
            or
          </Typography>
        </Grid>
        <Grid container justify='center'>
          <TextField
            id='name'
            label='Mobile Number'
            name='mobileNumber'
            className={classes.textField}
            value={mobileNumber}
            InputProps={{ classes: { input: classes.textField } }}
            InputLabelProps={{ classes: { root: classes.textField } }}
            FormHelperTextProps={{ classes: { root: classes.textField } }}
            onChange={handleChange('mobileNumber')}
            margin='normal'
          />
        </Grid>
      </form>
      <form className={classes.container} noValidate autoComplete='off'>
        <div style={{ width: '100%' }}>
          <Box
            component='span'
            visibility={student.length === 0 ? 'hidden' : 'visible'}
          >
            <h2>Search Results</h2>
            <SearchResults student={student} />
          </Box>
        </div>
      </form>
    </div>
  )
}
