import React from 'react';
import { Form, Button, Toast } from '@douyinfe/semi-ui';

const LoginForm = () => {

  return (
    <Form className=''>
      {({ }) => (
        <>
          <Form.Input field='email' label='Email' placeholder='Enter your email'></Form.Input>
          <Form.Input field='password' label='Password' placeholder='Enter your password'></Form.Input>
        </>
      )}
    </Form>
  );
};


export default LoginForm