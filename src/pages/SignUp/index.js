import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/beard_color.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber_color" style={{ height: 100 }} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your Email" />
        <Input
          name="password"
          type="password"
          placeholder="Create a Super Password"
        />

        <button type="submit">Create Account</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
