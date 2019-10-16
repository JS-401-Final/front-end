import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const API_URL = 'http://localhost:4000';

const columns = [
  {
    Header: 'View Details',
    accessor: 'id',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    Cell: e =><Link to={`casePage/${e.value}`}>View Case Details</Link>
  },
  {
    Header: 'Case ID',
    accessor: 'caseId',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Name',
    accessor: 'title',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Attorney',
    accessor: 'caseAttorney',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Case Status',
    accessor: 'status',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
];

export default function HomePage() {

  const [caseList, setCaseList] = useState([]);

useEffect(() => {
  const options = {
    method: 'GET',
  };
  fetch(`${API_URL}/cases`, options)
    .then(result => result.json())
    .then(data => {
      setCaseList(data);
      console.log(data);
    })
},[]);

  return(
    <>
    <div className="container">
      <h1>Welcome to CaseHawk!</h1>
      <Link to="/casePage">CasePage</Link>
    </div>
    <div className="caseList" style={{textAlign: 'center', padding: '50px' }}>
      <ReactTable
      manual
      minRows={0}
      pageSize={1}
      data={caseList}
      columns={columns}
      pages={0}
      defaultPageSize={5}
      showPagination={true}
    /></div>
</>
  )

}