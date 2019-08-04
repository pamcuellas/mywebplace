/*jshint esversion: 6 */
import React from 'react';

const NoPicture = props => (
  <div className='no-picture'>
    <i className="fas fa-sad-tear"></i>
    <h3>Sorry! No Pictures match "<strong>{props.query}</strong>".</h3>
  </div>
);

export default NoPicture;


