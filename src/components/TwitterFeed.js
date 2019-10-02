import React from 'react';
import './TwitterFeed.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function TwitterFeed() {
  return (
    <div>
    <div>
      <FontAwesomeIcon icon="faTwitter"/>
      Twitter Feed <small>#France</small>
    </div>
    <ul>
      <li>
        <div>iconhere</div>
        <div>Don't forget your sunscreen tomorrow!!</div>
      </li>
      <li>
        <div>iconhere</div>
        <div>Amazing weather in Paris!!</div>
      </li>
    </ul>
    </div>

  );
}
export default TwitterFeed;