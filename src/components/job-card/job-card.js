import React, { Component } from 'react';
import './job-card.css';

function JobCard({ job }) {
  return (
    <div className="jobCard">
      <h3>{ job.company }</h3>
      <h4>
        { job.jobTitle }
        <span>{ job.startDate } - { job.endDate }</span>
      </h4>
      <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
      <p><strong>Skills:</strong></p>
      <ul>
        {job.skills.map(function(skill, index){
          return <li key={ index }>{skill}</li>;
        })}
      </ul>
      { !!job.quotes &&
        <div>
          <p><strong>Quotes</strong></p>
          {job.quotes.map(function(quote, index){
            return <div className="quote" key={ index }>
                      <p><em>{quote.quote}</em></p>
                      <p className="quote__name">{quote.name} | <em>{quote.title}</em></p>
                   </div>;
          })}
        </div>
      }
    </div>
  );
}

export default JobCard;
