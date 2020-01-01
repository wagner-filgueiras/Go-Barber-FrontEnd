import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/beard_color.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
