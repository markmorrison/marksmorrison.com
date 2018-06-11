import React, { Component } from 'react';
import './main-header.css';

function MainHeader() {
  return (
    <div className="app">
      <header className="mainHeader">
        <div className="mainHeader__fade"></div>
        <h1 className="mainHeader__title">Mark S. Morrison</h1>
        <p className="mainHeader__subtitle">Front End Engineer and UX Profressional</p>
        <div className="buttons">
          <a href="#experience" className="button button-icon">Experience <i className="zmdi zmdi-chevron-right"></i></a>
          <a href="https://www.linkedin.com/in/mark-morrison" target="_blank" className="button button-icon">LinkedIn <i className="zmdi zmdi-chevron-right"></i></a>
        </div>
        <div className="mainHeader__arrow"></div>
      </header>
    </div>
  );
}

export default MainHeader;
