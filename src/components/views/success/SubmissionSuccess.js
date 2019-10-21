import React, { Component } from 'react'
import pdfGeneratorAPI from '../../api/PdfGeneratorApi'
import FileDownload from 'js-file-download'
import { browserHistory } from 'react-router'
import {makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 30,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 325,
    fontSize: 24,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
      margin: theme.spacing(2),
      fontSize:25,
      fontWeight: 'bold',
    },
  input: {
      display: 'none',
   },
  typography: {
      flexGrow: 1,
      fontWeight: 'bold',
   },
  resize:{
      fontSize:25
    },
  grid: {
    width: "80%",
    height: "100%"
  }
}));

function SubmissionSuccess (props) {

const classes = useStyles();

 const [active, setActive] = React.useState( false )
 console.log('Student '+props.location.state.student.applicationNumber)

 const student = props.location.state.student

  const back = event => {
    event.preventDefault()
    browserHistory.push('/')
  }

  const viewFormHandler = event => {
    event.preventDefault()

    setActive({ active: true })

    console.log('before Call Pdf:' + student.name)

    pdfGeneratorAPI
      .post('/api/generate', student, { responseType: 'blob' })
      .then(res => {
        console.log('Response:' + res.data)
        setActive({ active: false })
        FileDownload(res.data, 'ApplicationForm.pdf')
      })
      .catch(error => {
        console.log('Error:' + error)
        setActive({ active: false })
      })
  }

    return (

        <form className={classes.container} noValidate autoComplete="off">

                <Grid container justify="center">
                    <Typography component="h1" variant="h2" className={classes.typography} align="center">
                              Dear user, Congratulation!
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography component="h1" variant="h4" className={classes.typography} align="center">
                              You have successfully submitted the application form.
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography component="h1" variant="h4" className={classes.typography} align="center">
                              Your application application Number is
                        <LoadingOverlay active={ active } spinner={<BounceLoader />} />
                        <Link href="#" onClick={viewFormHandler} variant="body2" className={classes.button}>
                            {student.applicationNumber}.
                        </Link>
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography component="h1" variant="h4" className={classes.typography} align="center">
                              Application soft copy will be sent to your email {student.email}.
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Button color="primary" className={classes.button} onClick={back}>
                        <b>Back</b>
                    </Button>
                </Grid>
        </form>
    )
}

export default SubmissionSuccess
