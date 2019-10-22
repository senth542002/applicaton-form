import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Typography from '@material-ui/core/Typography'
import { browserHistory } from 'react-router'
import ApplicationFormValidator from './ApplicationFormValidator.js'
import applicationFormAPI from '../../api/ApplicationFormApi'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

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
    fontSize: 25
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

export default function ApplicationForm () {
  const classes = useStyles()

  const [student, setStudent] = React.useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: new Date('01 June 2017'),
    applicationNumber: ''
  })

  const [error, setError] = React.useState('')
  const [active, setActive] = React.useState(false)

  const handleChange = name => event => {
    if (name === 'dateOfBirth') {
      let newStudent = student
      newStudent[name] = event
      setStudent({ ...student, [student]: newStudent })
      console.log('Student Value:' + student.dateOfBirth)
    } else {
      let newStudent = student
      newStudent[name] = event.target.value
      setStudent({ ...student, [student]: newStudent })
      console.log('Student Value:' + student[name])
    }
  }

  const submitFormHandler = event => {
    event.preventDefault()

    const validationResult = ApplicationFormValidator(student)
    const err = validationResult['errors']
    console.log('Err:' + err['name'])

    setError(err)
    console.log('Errors: ' + error['name'])
    console.log('Errors: ' + error.name)

    if (validationResult['formIsValid']) {
      console.log('Validaton Success')
      setActive({ active: true })

      applicationFormAPI
        .post('/api/applications', student)
        .then(res => {
          console.log('Response:' + res)
          console.log('Id:' + res.data.id)

          let newStudent = student
          newStudent['applicationNumber'] = res.data.id
          setStudent({ ...student, [student]: newStudent })

          setActive({ active: false })

          console.log('Latest Student Id: ' + student.applicationNumber)
          console.log('Active Flag: ' + active)

          browserHistory.push({
            pathname: '/success',
            state: {
              applicationNumber: res.data.id,
              student: student
            }
          })
        })
        .catch(error => {
          console.log('Error:' + error)
          setActive({ active: false })
        })
    } else {
      console.log('Check the validation Errors')
    }
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Grid container justify='center'>
        <Typography
          component='h1'
          variant='h2'
          className={classes.typography}
          align='center'
        >
          Student Application Form
        </Typography>
      </Grid>
      <Grid container justify='center'>
        <TextField
          id='name'
          label='Student Name'
          name='name'
          className={classes.textField}
          value={student.name}
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ classes: { root: classes.textField } }}
          FormHelperTextProps={{ classes: { root: classes.textField } }}
          onChange={handleChange('name')}
          error={!!error['name']}
          helperText={error['name']}
          margin='normal'
        />
      </Grid>
      <Grid container justify='center'>
        <TextField
          id='fatherName'
          label='Father Name'
          name='fatherName'
          className={classes.textField}
          value={student.fatherName}
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ classes: { root: classes.textField } }}
          FormHelperTextProps={{ classes: { root: classes.textField } }}
          onChange={handleChange('fatherName')}
          error={!!error['fatherName']}
          helperText={error['fatherName']}
          margin='normal'
        />
      </Grid>
      <Grid container justify='center'>
        <TextField
          id='motherName'
          label='Mother Name'
          name='motherName'
          className={classes.textField}
          value={student.motherName}
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ classes: { root: classes.textField } }}
          FormHelperTextProps={{ classes: { root: classes.textField } }}
          onChange={handleChange('motherName')}
          error={!!error['motherName']}
          helperText={error['motherName']}
          margin='normal'
        />
      </Grid>
      <Grid container justify='center'>
        <TextField
          id='email'
          type='email'
          label='Email'
          name='email'
          className={classes.textField}
          value={student.email}
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ classes: { root: classes.textField } }}
          FormHelperTextProps={{ classes: { root: classes.textField } }}
          onChange={handleChange('email')}
          autoComplete='email'
          error={!!error['email']}
          helperText={error['email']}
          margin='normal'
        />
      </Grid>
      <Grid container justify='center'>
        <TextField
          id='mobileNumber'
          type='mobileNumber'
          label='Mobile Number'
          name='mobileNumber'
          className={classes.textField}
          value={student.mobileNumber}
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ classes: { root: classes.textField } }}
          FormHelperTextProps={{ classes: { root: classes.textField } }}
          onChange={handleChange('mobileNumber')}
          error={!!error['mobileNumber']}
          helperText={error['mobileNumber']}
          margin='normal'
        />
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='center'>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            id='dateOfBirth'
            label='Date of Birth'
            InputProps={{ classes: { root: classes.resize } }}
            InputLabelProps={{ classes: { root: classes.textField } }}
            FormHelperTextProps={{ classes: { root: classes.textField } }}
            value={student.dateOfBirth}
            minDate={new Date('01 Jan 2017')}
            maxDate={new Date('01 June 2017')}
            onChange={handleChange('dateOfBirth')}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid container justify='center'>
        <LoadingOverlay active={active} spinner={<BounceLoader />} />
        <Button
          color='primary'
          className={classes.button}
          onClick={submitFormHandler}
        >
          Submit
        </Button>
      </Grid>
    </form>
  )
}
