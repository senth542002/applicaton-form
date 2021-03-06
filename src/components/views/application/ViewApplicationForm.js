import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Moment from 'moment'
import Button from '@material-ui/core/Button'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

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

 const submitFormHandler = event => {
    event.preventDefault()

    html2canvas(document.getElementById("page"),
                { onclone: (document) => {
                 document.getElementById('print-button').style.visibility = 'hidden'
                 }})
                .then(canvas => {

                var imgData = canvas.toDataURL("image/png",1.0);
                var pdf = new jsPDF('l','mm')

                pdf.addImage(imgData, "PNG", 0, 0);
                pdf.save("Student-Application.pdf");
            });

    }

function ViewApplicationForm(props) {
    const classes = useStyles()
    console.log('props in view application form:'+props.location.state.student.name)
    return (
        <form className={classes.container} noValidate autoComplete='off' id='page'>
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
                  id='applicationNumber'
                  label='Application Number'
                  name='applicationNumber'
                  className={classes.textField}
                  value={props.location.state.student.id}
                  InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                  InputLabelProps={{ classes: { root: classes.textField } }}
                  FormHelperTextProps={{ classes: { root: classes.textField } }}
                  margin='normal'
                />
              </Grid>
              <Grid container justify='center'>
                  <TextField
                    id='name'
                    label='Student Name'
                    name='name'
                    className={classes.textField}
                    value={props.location.state.student.name}
                    InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                    InputLabelProps={{ classes: { root: classes.textField } }}
                    FormHelperTextProps={{ classes: { root: classes.textField } }}
                    margin='normal'
                  />
              </Grid>
               <Grid container justify='center'>
                   <TextField
                     id='fatherName'
                     label='Father Name'
                     name='fatherName'
                     className={classes.textField}
                     value={props.location.state.student.fatherName}
                     InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                     InputLabelProps={{ classes: { root: classes.textField } }}
                     FormHelperTextProps={{ classes: { root: classes.textField } }}
                     margin='normal'
                   />
              </Grid>
              <Grid container justify='center'>
                    <TextField
                      id='motherName'
                      label='Mother Name'
                      name='motherName'
                      className={classes.textField}
                      value={props.location.state.student.motherName}
                      InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                      InputLabelProps={{ classes: { root: classes.textField } }}
                      FormHelperTextProps={{ classes: { root: classes.textField } }}
                      margin='normal'
                    />
                </Grid>
                <Grid container justify='center'>
                    <TextField
                      id='email'
                      label='Email'
                      name='email'
                      className={classes.textField}
                      value={props.location.state.student.email}
                      InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                      InputLabelProps={{ classes: { root: classes.textField } }}
                      FormHelperTextProps={{ classes: { root: classes.textField } }}
                      margin='normal'
                    />

                        <TextField
                          id='mobileNumber'
                          label='Mobile Number'
                          name='mobileNumber'
                          className={classes.textField}
                          value={props.location.state.student.mobileNumber}
                          InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                          InputLabelProps={{ classes: { root: classes.textField } }}
                          FormHelperTextProps={{ classes: { root: classes.textField } }}
                          margin='normal'
                        />
                    </Grid>
                    <Grid container justify='center'>
                        <TextField
                          id='gender'
                          label='Gender'
                          name='gender'
                          className={classes.textField}
                          value='Male'
                          InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                          InputLabelProps={{ classes: { root: classes.textField } }}
                          FormHelperTextProps={{ classes: { root: classes.textField } }}
                          margin='normal'
                        />
                        <TextField
                          id='dateOfBirth'
                          label='Date of Birth'
                          name='dateOfBirth'
                          className={classes.textField}
                          value={Moment(props.location.state.student.dateOfBirth)
                                                   .local()
                                                   .format('DD-MM-YYYY')}
                          InputProps={{ classes: { input: classes.textField }, disabled: true, readOnly: true }}
                          InputLabelProps={{ classes: { root: classes.textField } }}
                          FormHelperTextProps={{ classes: { root: classes.textField } }}
                          margin='normal'
                        />
                    </Grid>
                  <Grid container justify='center'>
                    <Button
                      color='primary'
                      className={classes.button}
                      onClick={submitFormHandler}
                      id='print-button'
                    >
                      Print
                    </Button>
                  </Grid>
        </form>
    )
}

export default ViewApplicationForm