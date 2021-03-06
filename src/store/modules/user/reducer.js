import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};
export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        // eslint-disable-next-line
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        // eslint-disable-next-line
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        // eslint-disable-next-line
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
