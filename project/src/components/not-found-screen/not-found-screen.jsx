import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <div style={{backgroundColor: '#4682B4', margin: '200px auto'}}>
      <h1 style={{color: '#FFF5EE', fontSize: '50px', textAlign: 'center', padding: '40px'}}>404 page not found
        <br />
        <small>:,(</small>
        <br />
        <Link to="/" style={{borderBottom: 'dotted', borderWidth: '5px', fontSize: '30px', color: '#191970'}}>go to home </Link>
      </h1>
    </div>
  );
}
