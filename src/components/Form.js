import './Form.scss';

export default function Form() {
  return (
    <section className='container Form'>
      <h3>Credit Card Activation</h3>
      <p>Please enter your credit card details in the form below:</p>
      <form onSubmit={event => event.preventDefault()}>
        <ul>
          <li><input type='text' name='cardNumber' placeholder='card number' required /></li>
          <li><input type='text' name='csv' placeholder='csv' required /></li>
          <li><input type='text' name='expiryDate' placeholder='expiry date (MMYY)' required /></li>
          <li><input type='text' name='phone' placeholder='phone number' required /></li>
          <li><input className='submit-button' type='submit' value='SUBMIT' /></li>
        </ul>
      </form>
    </section>

  );
}