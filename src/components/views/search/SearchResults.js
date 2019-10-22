import React from 'react'
import Moment from 'moment'
import pdfGeneratorAPI from '../../api/PdfGeneratorApi'
import FileDownload from 'js-file-download'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  tableHeaderCell: {
    fontSize: '20px',
    padding: '2px',
    fontWeight: 'bold'
  },
  tableBodyCell: {
    fontSize: '20px',
    padding: '2px'
  }
})

const viewFormHandler = student => event => {
  console.log('Value:' + student)
  pdfGeneratorAPI
    .post('/api/generate', student, { responseType: 'blob' })
    .then(res => {
      console.log('Response:' + res.data)

      FileDownload(res.data, 'ApplicationForm.pdf')
    })
    .catch(error => {
      console.log('Error:' + error)
    })
}

export default function SearchResults ({ student }) {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Application #
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Name
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Father Name
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Mother Name
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Email
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Mobile Number
            </TableCell>
            <TableCell align='left' className={classes.tableHeaderCell}>
              Data of Birth
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map(row => (
            <TableRow key={row.name}>
              <TableCell align='left' className={classes.tableBodyCell}>
                <a href='#link' onClick={viewFormHandler(row)}>
                  {row.id}
                </a>
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {row.name}
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {row.fatherName}
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {row.motherName}
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {row.email}
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {row.mobileNumber}
              </TableCell>
              <TableCell align='left' className={classes.tableBodyCell}>
                {Moment(row.dateOfBirth)
                  .local()
                  .format('DD-MM-YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
