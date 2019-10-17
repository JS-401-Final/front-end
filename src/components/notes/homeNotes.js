import React, { useEffect } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import './notes.css';
import PropTypes from 'prop-types';
import noteActions from '../../store/actions/notes-action';
import Modal from './details-modal';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'View Details',
    accessor: 'id',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    Cell: (e) => <Modal id={e.value}/>, // eslint-disable-line
  },
  {
    Header: 'Case ID',
    accessor: 'caseId',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Date',
    accessor: 'dateCreated',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Title',
    accessor: 'title',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' }, 
  },
  {
    Header: 'Author',
    accessor: 'author',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },

];


const Notes = (props) => {
  useEffect(() => {
    props.fetchNotes(props.user.token);
  }, []);

  
  return (
    <>
    <div className="caseList" style={{ textAlign: 'center', padding: '50px' }}>
      <ReactTable
      manual
      minRows={0}
      pageSize={1}
      data={props.notes}
      columns={columns}
      pages={0}
      defaultPageSize={5}
      showPagination={true}
    /></div>
    </>
  );
};


const mapStateToProps = (state) => ({
  notes: state.notes,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (token) => dispatch(noteActions.fetchNotes(token)),
});


Notes.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.array,
  user: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
