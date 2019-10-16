import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
      <>
            <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            Case Hawk
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          {/* doesnt belong on nav NavBar */}
          <Link to="/casePage">CasePage</Link>
          {/* <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a> */}
        </div>
      </div>
      </>
  
    );
}
