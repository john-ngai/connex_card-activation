// Packages
import { useState } from 'react';
import axios from 'axios';
// Stylesheet
import './Form.scss';

export default function Form() {
  // POST request body.
  const [body, setBody] = useState({
    cardnumber: '',
    csv: '',
    expirydata: '',
    phonenumber: '',
  });
  const [status, setStatus] = useState(null);

  const onSubmitHandler = event => {
    event.preventDefault();
    const url = '/cardactivation';
    const headers = {
      headers: {
        'Authkey': 'A123JDKn12l123@11saazdeop102',
        'Content-Type': 'application/json',
      }
    };

    axios.post(url, body, headers)
      .then(response => setStatus(response.data.msg))
      .catch(error => setStatus(error.response.data.msg));
  }

  return (
    <section className='container Form'>
      <h3>Credit Card Activation</h3>
      <p>Please enter your credit card details in the form below:</p>
      <p>{status}</p>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li>
            <input
              required
              type='text'
              name='cardnumber'
              placeholder='card number'
              value={body.cardnumber}
              onChange={event => setBody(prev => (
                { ...prev, cardnumber: event.target.value }
              ))}
            />
          </li>
          <li>
            <input
              required
              type='text'
              name='csv'
              placeholder='csv'
              value={body.csv}
              onChange={event => setBody(prev => (
                { ...prev, csv: event.target.value }
              ))}
            />
          </li>
          <li>
            <input
              required
              type='text'
              name='expirydata'
              placeholder='expiry date (MMYY)'
              value={body.expirydata}
              onChange={event => setBody(prev => (
                { ...prev, expirydata: event.target.value }
              ))}
            />
          </li>
          <li>
            <input
              required
              type='text'
              name='phonenumber'
              placeholder='phone number'
              value={body.phonenumber}
              onChange={event => setBody(prev => (
                { ...prev, phonenumber: event.target.value }
              ))}
            />
          </li>
          <li><input className='submit-button' type='submit' value='Submit' /></li>
        </ul>
      </form>
    </section>

  );
}