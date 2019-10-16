import React, { useState, useReducer } from 'react';
import './case.scss';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Contact from '../contact/contact'; //TODO: check other team

// import CaseNote from './case-note/case-note';
// import Search from './search/search';
// import CaseIntakeForm from './case-intake-form/case-intake-form';
// import { getCaseAction, updateCaseAction } from '../../store/actions/case-action';
import CaseForm from './case-form/case-form';
// import { Route } from 'react-router-dom';

// TODO: Need to be able to get this from .env somehow?? Shows as undefined
// const API = process.env.API_URL;
const API = 'http://localhost:4000';
// const routeAddress = window.location.pref;
// console.log(routeAddress);

// const columns = [
//   {
//     Header: 'Date Created',
//     accessor: 'dateCreated',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
//   {
//     Header: 'Title',
//     accessor: 'title',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
// ];

function Case(props) {
  const [ready, setReady] = useState(false);
  // const [caseId, setCaseId] = useState('');
  // const [caseTitle, setCaseTitle] = useState('');
  // const [caseStatus, setCaseStatus] = useState('');
  // const [referralType, setReferralType] = useState('');
  // const [legalPlan, setLegalPlan] = useState('');
  // const [dates, setDates] = useState([]);
  // const [caseNotes, setCaseNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});
  
  useEffect(() => {
    const options = {
      method: 'GET',
    };
    fetch(`${API}/case/CASEID-123456`, options)
      .then((result) => result.json())
      .then((data) => props.getCase(data[0]))
      .then(() => setReady(true));
  }, []);

  return (
    <>
      <h2 className= "caseTitle">{caseTitle}: Case Map</h2>
      {/* <Link to="/">Home</Link> */}
      <form>
        <p>Case Title: {caseTitle}</p>
        <label> Current Status
          <select value={caseStatus} onChange={handleStatusChange}>
            <option value='unset'>Unset</option>
            <option value='in-progress'>In Progress</option>
            <option value='closed'>Closed</option>
          </select>
        </label>
        <label> Referral
          <select value={referral} onChange={handleReferralChange}>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>
        <label> Legal Plan
          <select value={legalPlan} onChange={handleLegalPlanChange}>
            <option value='default'>Default</option>
            <option value='family'>Family</option>
            <option value='criminal'>Criminal</option>
          </select>
        </label>
      </form>

      <h5>Case Notes</h5>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (data) => dispatch({
    type: 'CASE_FETCH',
    payload: data,
  }),
  // updateCase: (data) => dispatch(updateCaseAction(data)),
});

Case.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
