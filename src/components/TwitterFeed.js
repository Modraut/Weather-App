import React from 'react';
import './TwitterFeed.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function TwitterFeed() {
  return (
    <div className="card-downLeft">
    <h1>
      <FontAwesomeIcon icon={faTwitter} color="#41b3b7" />
      &nbsp;&nbsp;&nbsp;Twitter Feed <small>#France</small>
    </h1>
    <ul>
      <li>
      <FontAwesomeIcon icon={faTwitter} color="#41b3b7" />
      &nbsp;&nbsp;&nbsp;Don't forget your sunscreen tomorrow!!
      </li>
      <li>
      <FontAwesomeIcon icon={faTwitter} color="#41b3b7" />
      &nbsp;&nbsp;&nbsp;Amazing weather in Paris!!
      </li>
    </ul>
    </div>

  );
}
export default TwitterFeed;