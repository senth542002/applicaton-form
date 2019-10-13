import ReactTable from 'react-table'
import React, { Component } from 'react'
import 'react-table/react-table.css'
import Moment from 'moment'
import pdfGeneratorAPI from '../../api/PdfGeneratorApi'
import FileDownload from 'js-file-download'

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

const columns = [
  {
    id: 'id',
    Header: 'Application #',
    accessor: d => {
      return (
        <a href='#link' onClick={viewFormHandler(d)}>
          {d.id}
        </a>
      )
    },
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 150
  },
  {
    Header: 'Student Name',
    accessor: 'name',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 150
  },
  {
    Header: 'Father Name',
    accessor: 'fatherName',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 150
  },
  {
    Header: 'Mother Name',
    accessor: 'motherName',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 150
  },
  {
    Header: 'Email',
    accessor: 'email',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 250
  },
  {
    Header: 'Mobile Number',
    accessor: 'mobileNumber',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 150
  },
  {
    id: 'dateOfBirth',
    Header: 'Data of Birth',
    accessor: d => {
      return Moment(d.dateOfBirth)
        .local()
        .format('DD-MM-YYYY')
    },
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    minWidth: 300
  }
]

export default class SearchResults extends Component {
  render () {
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          manual
          minRows={0}
          pageSize={1}
          data={this.props.student}
          columns={columns}
          pages={0}
          showPagination={false}
        />
      </div>
    )
  }
}
