import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/beard_color.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber_color" style={{ height: 100 }} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your Email" />
        <Input
          name="password"
          type="password"
          placeholder="Your Super Password"
        />

        <button type="submit">Log In</button>
        <Link to="/register">Create your Account</Link>
      </Form>
    </>
  );
}
