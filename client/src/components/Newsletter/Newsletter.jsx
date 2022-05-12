import React from 'react';
import cl from './Newsletter.module.sass'

const Newsletter = () => {
  return (
    <div className={cl.wrapper}>
      <div className="container">
        <div className={cl.newsletter}>
          <div className={cl.subscr}>
            <span>subscribe to our</span>
            Newsletter
          </div>
          <div className={cl.input}>
            <input type="text" name='email' placeholder='Your email address' />
            <button onClick={() => console.log('hello')}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
