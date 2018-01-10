import React, { Component } from 'react'
import Emails from '../../data/emails.json';

const emails = Emails.map(email => {
  return (
    <li key={email.email_types_id}>
      {email.friendly_name}
    </li>
  );
});

export default class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <p>This quick demo pulls emails from a local JSON file of different internal email types NextDeal sends. This demo uses React 16.2.</p>
          <ul>
            { emails }
          </ul>
        </div>
      </main>
    )
  }
}