import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <Input name="name" placeholder="Full Name" />
          <Input name="email" placeholder="Your Email" />

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Your old Paswword"
          />
          <Input
            type="password"
            name="newPassword"
            placeholder="Your new Password"
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
          />

          <button type="submit">Update Profile</button>
        </Form>

        <button type="button" onClick={handleSignOut}>
          Log Out
        </button>
      </Container>
    </>
  );
}
