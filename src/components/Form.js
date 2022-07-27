// Packages
import { useState } from 'react';
import axios from 'axios';
// Stylesheet
import './Form.scss';

export default function Form() {
  const [formData, setFormData] = useState({
    cardnumber: '',
    csv: '',
    expirydata: '',
    phonenumber: '',
  });
  const [status, setStatus] = useState({
    state: 'null',
    message: '',
  });

  // Submit the formData & update the status.
  const onSubmitHandler = event => {
    event.preventDefault();
    const url = '/cardactivation';
    const headers = {
      headers: {
        'Authkey': 'A123JDKn12l123@11saazdeop102',
        'Content-Type': 'application/json',
      }
    };
    axios.post(url, formData, headers)
      .then(response => {
        if (response.data.responsecode === 100) {
          setStatus({
            state: 'true',
            message: 'Activation Successful!',
          });
        }
      })
      .catch(error => {
        if (error.response.data.responsecode === 101) {
          setStatus({
            state: 'false',
            message: 'Activation Failed. Please check your credentials and try again.',
          });
        }
      });
  }

  return (
    <section className='container Form'>
      <div className='text-zone'>
        <span className='company'>Bank of Connex</span>
        <h3 className='title'>Credit Card Activation</h3>
        <p className='description'>Please enter your credit card details into the form below:</p>
        <p className='status' data-status={status.state}>{status.message}</p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li>
            <input
              required
              type='text'
              name='cardnumber'
              placeholder='Card Number'
              value={formData.cardnumber}
              onChange={event => setFormData(prev => (
                { ...prev, cardnumber: event.target.value }
              ))}
            />
          </li>
          <li>
            <input className='half'
              required
              type='text'
              name='csv'
              placeholder='CSV'
              value={formData.csv}
              onChange={event => setFormData(prev => (
                { ...prev, csv: event.target.value }
              ))}
            />
          </li>
          <li>
            <input className='half'
              required
              type='text'
              name='expirydata'
              placeholder='MM/YY'
              value={formData.expirydata}
              onChange={event => setFormData(prev => (
                { ...prev, expirydata: event.target.value }
              ))}
            />
          </li>
          <li>
            <input
              required
              type='text'
              name='phonenumber'
              placeholder='Phone'
              value={formData.phonenumber}
              onChange={event => setFormData(prev => (
                { ...prev, phonenumber: event.target.value }
              ))}
            />
          </li>
          <li>
            <input className='submit-button'
              type='submit'
              value='Submit'
            />
          </li>
        </ul>
      </form>
    </section>
  );
}