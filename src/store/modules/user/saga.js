import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(
      api.put,
      'http://localhost:3337/users',
      profile
    );

    toast.success('Profile updated successfully');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error updating profile. Check your data!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
